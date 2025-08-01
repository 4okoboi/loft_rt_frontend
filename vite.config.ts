import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => ({
	plugins: [
		react({
			include: '**/*.{jsx,tsx,js,ts}',
		}),
	],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					redux: ['@reduxjs/toolkit', 'react-redux', 'redux'],
					router: ['react-router-dom'],
				},
				assetFileNames: assetInfo => {
					const info = assetInfo.name?.split('.')
					const extType = info?.[info.length - 1]
					if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType || '')) {
						return `assets/images/[name][extname]`
					}
					if (/css/i.test(extType || '')) {
						return `assets/css/[name][extname]`
					}
					return `assets/[name]-[hash][extname]`
				},
			},
		},
		chunkSizeWarningLimit: 1000,
		target: 'es2015',
		cssCodeSplit: true,
		minify: 'esbuild',
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom'],
	},
	server: {
		port: 3000,
		open: false, // Отключаем автоматическое открытие браузера для серверов
		cors: true,
		host: true, // Разрешаем подключения извне
	},
	assetsInclude: ['**/*.webp'],
	preview: {
		port: 3000,
		host: true,
	},
}))
