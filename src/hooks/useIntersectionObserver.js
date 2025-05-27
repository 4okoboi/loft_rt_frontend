import { useEffect } from 'react'
import classes from './useIntersectionObserver.module.css'

const useIntersectionObserver = (observedElements, options) => {
	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options)

		observedElements.forEach(element => {
			if (element.current) {
				observer.observe(element.current)
			}
		})

		return () => {
			observedElements.forEach(element => {
				if (element.current) {
					observer.unobserve(element.current)
				}
			})
		}
	}, [])

	const handleIntersection = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio >= 0.5) {
				if (!entry.target.classList.contains(classes.block)) {
					entry.target.classList.add(classes.block)
				}
				observer.unobserve(entry.target)
			}
		})
	}
}

export default useIntersectionObserver
