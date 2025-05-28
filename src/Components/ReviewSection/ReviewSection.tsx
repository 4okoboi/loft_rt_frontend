import { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import checkmark from '../../assets/images/reviews/checkmark.svg'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows'
import classes from './ReviewSection.module.css'

// Импорт стилей Swiper (обязательно!)
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Arrow } from '../Reviews/Arrow'
import { useWindowSize } from './useWindowSize'

// Добавим глобальное состояние для отслеживания активного слайдера
let activeSliderId: string | null = null

interface ReviewSectionProps {
	goldTitle: string
	whiteTitle: string
	images: string[]
	firstTextSection: string
	secondTextSection: string
	secondTextSectionLow?: string
	thirdTextSection: string
	thirdTextSectionLow?: string
	extraImage: string
	innopolis?: boolean
	id: string
	isMoscow?: boolean
}
export const ReviewSection = ({
	firstTextSection,
	goldTitle,
	images,
	secondTextSection,
	thirdTextSection,
	whiteTitle,
	secondTextSectionLow,
	thirdTextSectionLow,
	extraImage,
	innopolis,
	id,
	isMoscow,
}: ReviewSectionProps) => {
	const block1 = useRef(null)
	const block2 = useRef(null)
	const block3 = useRef(null)
	const block4 = useRef(null)
	const block5 = useRef(null)
	const block6 = useRef(null)
	const block7 = useRef(null)
	const block8 = useRef(null)
	const observedElements = [
		block1,
		block2,
		block3,
		block4,
		block5,
		block6,
		block7,
		block8,
	]

	useIntersectionObserver(observedElements, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	})
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [modalHaveOpened, setModalHaveOpened] = useState<boolean>(false)
	const [currentIndex, setCurrentIndex] = useState<number>()
	const sliderWrapperRef = useRef<HTMLDivElement>(null)

	const { width } = useWindowSize()
	const isMobile = width < 500
	const isPad = width > 600 && width < 1024

	const swiperRef = useRef<SwiperType | null>(null)

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && modalOpen) {
				handleCloseSlider()
			}
		}

		if (modalOpen) {
			document.addEventListener('keydown', handleKeyDown)
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [modalOpen])

	const handleOpenSlider = (index: number) => {
		if (width <= 500) {
			return
		}
		if (activeSliderId && activeSliderId !== id) {
			const event = new CustomEvent('closeSlider', {
				detail: { id: activeSliderId },
			})
			document.dispatchEvent(event)
		}
		setModalOpen(true)
		setModalHaveOpened(true)
		setCurrentIndex(index)
		activeSliderId = id
	}

	const handleCloseSlider = () => {
		setModalOpen(false)
		activeSliderId = null
	}

	useEffect(() => {
		const handleCloseSliderEvent = (event: CustomEvent) => {
			if (event.detail.id === id) {
				handleCloseSlider()
			}
		}

		document.addEventListener(
			'closeSlider',
			handleCloseSliderEvent as EventListener
		)
		return () =>
			document.removeEventListener(
				'closeSlider',
				handleCloseSliderEvent as EventListener
			)
	}, [id])

	return (
		<div className={classes.review_section}>
			<div
				className={`${classes.review_section_upper_wrapper} ${
					modalOpen ? classes.modal_open : ''
				}`}
			>
				<div className={classes.review_section_heading} ref={block1}>
					<p className={classes.review_section_heading_gold}>
						{goldTitle}
						{innopolis && (
							<img className={classes.checkmark_image} src={checkmark} alt='' />
						)}
					</p>
				</div>
				<div
					className={classes.review_section_heading_white_wrapper}
					ref={block2}
				>
					<p className={classes.review_section_heading_white}>
						{whiteTitle}
						{isMoscow && (
							<div className={classes.is_moscow_block}>
								<div className={classes.arrow_wrapper}>
									<Arrow />
								</div>
								<div className={classes.is_moscow_block_yellow_part}>
									г. Москва
								</div>
							</div>
						)}
					</p>
				</div>
				<div className={classes.review_section_cards} ref={block3}>
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image}
								onClick={() => {
									handleOpenSlider(index)
									setModalHaveOpened(true)
								}}
								alt={`Review ${index + 1}`}
							/>
						</div>
					))}
				</div>
				{modalOpen && (
					<div className={classes.sliderWrapper} onClick={handleCloseSlider}>
						<div className={classes.sliderContent} ref={sliderWrapperRef}>
							<Swiper
								effect='fade'
								slidesPerView={1}
								className={classes.swiper}
								modules={[Navigation, Pagination]}
								initialSlide={currentIndex}
								onSwiper={swiper => {
									swiperRef.current = swiper
								}}
							>
								{images.map((image, index) => (
									<SwiperSlide key={index} className={classes.slider_slide}>
										<img
											src={image}
											alt={`Slide ${index + 1}`}
											onClick={e => e.stopPropagation()}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<button
								className={classes.navButtonNext}
								onClick={e => {
									e.stopPropagation()
									swiperRef.current?.slideNext()
								}}
								aria-label='Next slide'
							>
								<CustomNextArrow />
							</button>
							<button
								className={classes.navButtonPrev}
								onClick={e => {
									e.stopPropagation()
									swiperRef.current?.slidePrev()
								}}
								aria-label='Previous slide'
							>
								<CustomPrevArrow />
							</button>
						</div>
					</div>
				)}
			</div>
			<div className={classes.review_section_text} ref={block4}>
				<p className={classes.review_section_text_heading}>История проекта</p>
				<div className={classes.review_section_text_first_wrapper}>
					<div className={classes.review_section_text_first}>
						<p className={classes.review_section_text_number}>1</p>
						<p className={classes.review_section_text_description}>
							{firstTextSection}
						</p>
					</div>
					<div className={classes.image_block}>
						<img src={extraImage} alt='' />
					</div>
				</div>

				<div className={classes.review_section_text_second_and_third}>
					<p className={classes.review_section_text_number}>2</p>
					<p className={classes.review_section_text_description}>
						{secondTextSection}
						{secondTextSectionLow && (
							<>
								<br></br>
								<br></br>
								{secondTextSectionLow}
							</>
						)}
					</p>
				</div>
				<div className={classes.review_section_text_second_and_third}>
					<p className={classes.review_section_text_number}>3</p>
					<p className={classes.review_section_text_description}>
						{thirdTextSection}
						{thirdTextSectionLow && (
							<>
								<br></br>
								<br></br>
								{thirdTextSectionLow}
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	)
}
