import React, { useEffect, useRef, useState } from 'react'

interface LazyImageProps {
	src: string
	alt: string
	className?: string
	width?: number | string
	height?: number | string
	placeholder?: string
	sizes?: string
}

const LazyImage: React.FC<LazyImageProps> = ({
	src,
	alt,
	className,
	width,
	height,
	placeholder,
	sizes,
}) => {
	const [imageSrc, setImageSrc] = useState<string>(placeholder || '')
	const [isLoaded, setIsLoaded] = useState(false)
	const [isInView, setIsInView] = useState(false)
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const img = imgRef.current
		if (!img) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true)
					observer.disconnect()
				}
			},
			{
				threshold: 0.1,
				rootMargin: '50px',
			}
		)

		observer.observe(img)

		return () => {
			observer.disconnect()
		}
	}, [])

	useEffect(() => {
		if (isInView && !isLoaded) {
			const img = new Image()
			img.onload = () => {
				setImageSrc(src)
				setIsLoaded(true)
			}
			img.onerror = () => {
				setImageSrc(src)
				setIsLoaded(true)
			}

			img.src = src
		}
	}, [isInView, isLoaded, src])

	return (
		<img
			ref={imgRef}
			src={imageSrc}
			alt={alt}
			className={className}
			width={width}
			height={height}
			loading='lazy'
			style={{
				transition: 'opacity 0.3s ease',
				opacity: isLoaded ? 1 : 0.7,
			}}
		/>
	)
}

export default LazyImage
