const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '../src/assets/images')
const outputDir = path.join(__dirname, '../src/assets/images-webp')
const srcDir = path.join(__dirname, '../src')

// Создаем папку для WebP изображений
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true })
}

// Объект для маппинга старых путей на новые
const imageMapping = {}

// Функция для обработки всех файлов в папке
async function processDirectory(dir, currentPath = '') {
	const entries = fs.readdirSync(path.join(inputDir, currentPath), {
		withFileTypes: true,
	})

	for (const entry of entries) {
		const fullPath = path.join(currentPath, entry.name)
		const inputPath = path.join(inputDir, fullPath)
		const outputPath = path.join(outputDir, currentPath)

		if (entry.isDirectory()) {
			// Создаем папку в выходной директории
			if (!fs.existsSync(path.join(outputDir, fullPath))) {
				fs.mkdirSync(path.join(outputDir, fullPath), { recursive: true })
			}
			// Рекурсивно обрабатываем подпапки
			await processDirectory(dir, fullPath)
		} else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
			await optimizeImage(inputPath, outputPath, entry.name, fullPath)
		}
	}
}

// Функция оптимизации изображения
async function optimizeImage(inputPath, outputDir, fileName, relativePath) {
	try {
		const stats = fs.statSync(inputPath)
		const fileSizeKB = Math.round(stats.size / 1024)

		console.log(`Обрабатываем: ${fileName} (${fileSizeKB}KB)`)

		const baseName = path.parse(fileName).name
		const webpFileName = `${baseName}.webp`
		const webpPath = path.join(outputDir, webpFileName)

		// Конвертируем только в WebP
		await sharp(inputPath)
			.webp({
				quality: 80,
				effort: 4,
			})
			.toFile(webpPath)

		// Сохраняем маппинг для замены
		const oldImportPath = `../../assets/images/${relativePath}`
		const newImportPath = `../../assets/images-webp/${relativePath.replace(
			/\.(png|jpg|jpeg)$/i,
			'.webp'
		)}`
		imageMapping[oldImportPath] = newImportPath

		// Проверяем размер WebP файла
		const webpStats = fs.statSync(webpPath)
		const savings = Math.round(
			((stats.size - webpStats.size) / stats.size) * 100
		)

		console.log(
			`✅ ${fileName}: ${fileSizeKB}KB → WebP: ${Math.round(
				webpStats.size / 1024
			)}KB (сжатие ${savings}%)`
		)

		// Удаляем оригинальный файл
		try {
			fs.unlinkSync(inputPath)
			console.log(`🗑️  Удален оригинал: ${fileName}`)
		} catch (deleteError) {
			console.log(`⚠️  Не удалось удалить ${fileName}: ${deleteError.message}`)
		}
	} catch (error) {
		console.error(`❌ Ошибка при обработке ${fileName}:`, error.message)
	}
}

// Функция для замены импортов в файлах
async function replaceImports() {
	console.log('🔄 Заменяем импорты изображений...')

	const findFiles = (dir, extensions = ['.tsx', '.jsx', '.ts', '.js']) => {
		let files = []
		const items = fs.readdirSync(dir, { withFileTypes: true })

		for (const item of items) {
			const fullPath = path.join(dir, item.name)
			if (item.isDirectory()) {
				files = files.concat(findFiles(fullPath, extensions))
			} else if (extensions.some(ext => item.name.endsWith(ext))) {
				files.push(fullPath)
			}
		}
		return files
	}

	const files = findFiles(srcDir)
	let totalReplacements = 0

	for (const file of files) {
		try {
			let content = fs.readFileSync(file, 'utf8')
			let modified = false

			// Заменяем импорты
			for (const [oldPath, newPath] of Object.entries(imageMapping)) {
				if (content.includes(oldPath)) {
					content = content.replace(
						new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
						newPath
					)
					modified = true
					totalReplacements++
				}
			}

			if (modified) {
				fs.writeFileSync(file, content, 'utf8')
				console.log(`✅ Обновлен файл: ${path.relative(srcDir, file)}`)
			}
		} catch (error) {
			console.error(`❌ Ошибка при обновлении ${file}:`, error.message)
		}
	}

	console.log(`🎉 Заменено ${totalReplacements} импортов изображений`)
}

// Запуск оптимизации
async function main() {
	console.log('🚀 Начинаем оптимизацию изображений...')
	console.log(`Входная папка: ${inputDir}`)
	console.log(`Выходная папка: ${outputDir}`)

	try {
		await processDirectory(inputDir)

		// Сохраняем маппинг
		const mappingFile = path.join(__dirname, 'image-mapping.json')
		fs.writeFileSync(mappingFile, JSON.stringify(imageMapping, null, 2))

		console.log('✅ Оптимизация завершена!')

		// Заменяем импорты
		await replaceImports()

		console.log(`📝 Файл маппинга сохранен: ${mappingFile}`)
		console.log(
			'🎉 Все готово! Теперь проект использует только WebP изображения.'
		)
	} catch (error) {
		console.error('❌ Ошибка при оптимизации:', error)
	}
}

main()
