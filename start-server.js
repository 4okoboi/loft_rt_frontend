#!/usr/bin/env node

const { spawn } = require('child_process')

// Определяем, находимся ли мы в продакшен среде
const isProduction = process.env.NODE_ENV === 'production'
const isServer = process.env.SERVER_MODE === 'true' || !process.env.DISPLAY

// Выбираем команду в зависимости от среды
let command
let args

if (isProduction) {
	// В продакшене запускаем preview сервер
	command = 'npm'
	args = ['run', 'start:prod']
} else {
	// В разработке запускаем dev сервер без автооткрытия браузера на серверах
	command = 'npx'
	args = ['vite', '--host', '0.0.0.0', '--port', '3000']

	// Если не на сервере, добавляем --open
	if (!isServer) {
		args.push('--open')
	}
}

console.log(`🚀 Запускаем ${isProduction ? 'продакшен' : 'dev'} сервер...`)
console.log(`📡 Сервер будет доступен на http://localhost:3000/`)

const child = spawn(command, args, {
	stdio: 'inherit',
	shell: true,
})

child.on('error', error => {
	console.error('❌ Ошибка запуска сервера:', error)
	process.exit(1)
})

child.on('exit', code => {
	if (code !== 0) {
		console.error(`❌ Сервер завершился с кодом ${code}`)
		process.exit(code)
	}
})
