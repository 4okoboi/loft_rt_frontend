const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '../src/assets/images')

// Функция для рекурсивного удаления оригинальных изображений
function removeOriginalImages(dir, currentPath = '') {
	const entries = fs.readdirSync(path.join(dir, currentPath), {
		withFileTypes: true,
	})

	let removedCount = 0
	let totalSize = 0

	for (const entry of entries) {
		const fullPath = path.join(currentPath, entry.name)
		const filePath = path.join(dir, fullPath)

		if (entry.isDirectory()) {
			// Рекурсивно обрабатываем подпапки
			const result = removeOriginalImages(dir, fullPath)
			removedCount += result.count
			totalSize += result.size
		} else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
			try {
				const stats = fs.statSync(filePath)
				const sizeKB = Math.round(stats.size / 1024)

				fs.unlinkSync(filePath)
				console.log(`🗑️  Удален: ${entry.name} (${sizeKB}KB)`)

				removedCount++
				totalSize += stats.size
			} catch (error) {
				console.error(`❌ Ошибка при удалении ${entry.name}:`, error.message)
			}
		}
	}

	return { count: removedCount, size: totalSize }
}

// Основная функция
function main() {
	console.log('🧹 Удаляем оригинальные PNG/JPG файлы...')
	console.log(`Папка: ${inputDir}`)

	try {
		const result = removeOriginalImages(inputDir)

		console.log(`✅ Завершено!`)
		console.log(`📊 Удалено файлов: ${result.count}`)
		console.log(
			`💾 Освобождено места: ${Math.round(result.size / 1024 / 1024)}MB`
		)

		if (result.count === 0) {
			console.log(
				'ℹ️  Оригинальные файлы не найдены (уже удалены или отсутствуют)'
			)
		}
	} catch (error) {
		console.error('❌ Ошибка при очистке:', error)
	}
}

main()
