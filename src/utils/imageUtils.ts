// Утилита для определения поддержки WebP
export const supportsWebP = (): Promise<boolean> => {
	return new Promise(resolve => {
		const webP = new Image()
		webP.onload = webP.onerror = () => {
			resolve(webP.height === 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=='
	})
}

// Функция для получения оптимизированного URL изображения
export const getOptimizedImageUrl = (
	originalUrl: string,
	webpUrl?: string
): Promise<string> => {
	return new Promise(async resolve => {
		if (webpUrl && (await supportsWebP())) {
			resolve(webpUrl)
		} else {
			resolve(originalUrl)
		}
	})
}

// Функция для предзагрузки изображений
export const preloadImage = (src: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve()
		img.onerror = reject
		img.src = src
	})
}

// Функция для создания плейсхолдера (blur placeholder)
export const createBlurPlaceholder = (
	width: number,
	height: number
): string => {
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')

	canvas.width = width
	canvas.height = height

	if (ctx) {
		// Создаем градиент как плейсхолдер
		const gradient = ctx.createLinearGradient(0, 0, width, height)
		gradient.addColorStop(0, '#f0f0f0')
		gradient.addColorStop(1, '#e0e0e0')

		ctx.fillStyle = gradient
		ctx.fillRect(0, 0, width, height)
	}

	return canvas.toDataURL('image/jpeg', 0.1)
}

// Динамический импорт изображений
export const importImage = async (imagePath: string) => {
	try {
		const module = await import(/* @vite-ignore */ imagePath)
		return module.default
	} catch (error) {
		console.warn(`Не удалось загрузить изображение: ${imagePath}`, error)
		return null
	}
}
