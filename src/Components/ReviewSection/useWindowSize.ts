import { useEffect, useState } from 'react'

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<{ width: number }>({
		width: window.innerWidth,
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth })
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}
