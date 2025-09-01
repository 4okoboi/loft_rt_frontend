import React, { useEffect, useState } from 'react'
import { ProductType } from '../../utils/generalTypes'
import classes from './ProductDetailPage.module.css'
// Импортируем fallback изображение
import fallbackImage from '../../assets/images/home_page_kitchen.png'
// Импортируем стрелки
import { useNavigate } from 'react-router-dom'
import arrowLeftBlack from '../../assets/images/arrow-left-black.svg'
import arrowLeft from '../../assets/images/arrow-left.svg'
import arrowRightBlack from '../../assets/images/arrow-right-black.svg'
import arrowRight from '../../assets/images/arrow-right.svg'
import cartIcon from '../../assets/images/cart-icon.svg'
import { getProducts } from '../../redux/catalog-reducer'
import { useTypedDispatch, useTypedSelector } from '../../redux/redux-store'

type ProductDetailPageType = {
	id: number
	name: string
	material?: string
	size?: string
	type?: string
	for_what?: string
	description: string
	photo_links: Array<string>
	price: number
	unit?: string
	added_at?: string
	setShopModal: React.Dispatch<React.SetStateAction<boolean>>
	product: ProductType
	addProduct: (product: ProductType, counter: number) => void
}

const ProductDetailPage: React.FC<ProductDetailPageType> = props => {
	const [counter, setCounter] = useState(1)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const navigate = useNavigate()

	const dispatch = useTypedDispatch()
	const allProducts = useTypedSelector(
		state => state.catalogPage.products
	).filter(product => product.id !== props.id)

	// Функции для слайдера
	const nextSlide = () => {
		if (allProducts.length <= 4) return
		const maxSlides = allProducts.length - 4
		setCurrentSlideIndex(prev => (prev >= maxSlides ? 0 : prev + 1))
	}

	const prevSlide = () => {
		if (allProducts.length <= 4) return
		const maxSlides = allProducts.length - 4
		setCurrentSlideIndex(prev => (prev <= 0 ? maxSlides : prev - 1))
	}

	useEffect(() => {
		if (allProducts.length === 0) {
			const fetchProducts = async () => {
				try {
					await dispatch(
						getProducts(
							'1', // counter (page)
							'none', // material
							'', // type
							'1499-45999', // price_range
							'default', // sort
							'' // search_query
						) as any
					)
					await dispatch(
						getProducts(
							'2', // counter (page)
							'none', // material
							'', // type
							'1499-45999', // price_range
							'default', // sort
							'' // search_query
						) as any
					)
				} catch (error) {
					console.error('Ошибка при загрузке продуктов:', error)
				}
			}

			fetchProducts()
		}
	}, [dispatch, allProducts.length]) // Добавляем зависимости

	const handleMinusClick = () => {
		if (counter > 1) {
			setCounter(counter - 1)
		}
	}

	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handlePlusClick = () => {
		setCounter(counter + 1)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value)
		if (!isNaN(value) && value >= 1) {
			setCounter(value)
		}
	}

	const handleImageError = (index: number) => {
		setImageErrors(prev => new Set(prev).add(index))
	}

	const getImageSrc = (index: number) => {
		if (imageErrors.has(index) || !props.photo_links[index]) {
			return fallbackImage
		}

		const imageUrl = props.photo_links[index]

		if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
			return imageUrl
		}

		if (imageUrl.startsWith('/')) {
			return `https://79.174.86.248:8080${imageUrl}`
		}

		return `https://79.174.86.248:8080/${imageUrl}`
	}

	const nextImage = () => {
		if (props.photo_links.length === 0) return
		setCurrentImageIndex(prev =>
			prev === props.photo_links.length - 1 ? 0 : prev + 1
		)
	}

	const prevImage = () => {
		if (props.photo_links.length === 0) return
		setCurrentImageIndex(prev =>
			prev === 0 ? props.photo_links.length - 1 : prev - 1
		)
	}

	const selectImage = (index: number) => {
		setCurrentImageIndex(index)
	}

	const validImages = props.photo_links.filter(
		(_, index) => !imageErrors.has(index)
	)

	return (
		<div className={classes.productDetailPage}>
			<div className={classes.container}>
				<div className={classes.breadcrumbs}>
					<span>Каталог</span>
					<span className={classes.separator}>›</span>
					<span className={classes.productName}>{props.name}</span>
				</div>

				<div className={classes.productContent}>
					<div className={classes.productGallery}>
						<div className={classes.mainImage}>
							<img
								src={getImageSrc(currentImageIndex)}
								alt={props.name}
								onError={() => handleImageError(currentImageIndex)}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>

							{validImages.length > 1 && (
								<>
									<button className={classes.navButton} onClick={prevImage}>
										<img src={arrowLeft} alt='Previous' />
									</button>
									<button
										className={classes.navButtonRight}
										onClick={nextImage}
									>
										<img src={arrowRight} alt='Next' />
									</button>
								</>
							)}
						</div>

						{validImages.length > 1 && (
							<div className={classes.thumbnailsBottom}>
								{props.photo_links.map((photo, index) => {
									// Показываем только 3 фото на мобильных или все фото на десктопах
									if (isMobile && index >= 3) return null

									return (
										<div
											key={index}
											className={`${classes.thumbnail} ${
												index === currentImageIndex ? classes.active : ''
											}`}
											onClick={() => selectImage(index)}
										>
											<img
												src={getImageSrc(index)}
												alt={`${props.name} ${index + 1}`}
												onError={() => handleImageError(index)}
											/>
										</div>
									)
								})}
							</div>
						)}
					</div>

					<div className={classes.productInfo}>
						<div className={classes.productHeader}>
							<h1 className={classes.productTitle}>{props.name}</h1>
							<p className={classes.productSubtitle}>
								Стеллаж в современном дизайне, идеально впишется в любой
								интерьер. Приобретите уже сейчас.
							</p>
						</div>

						<div className={classes.specifications}>
							<div className={classes.specLabels}>
								<span className={classes.specLabel}>Тип продукта:</span>
								<span className={classes.specLabel}>Артикул:</span>
								<span className={classes.specLabel}>Размеры:</span>
								<span className={classes.specLabel}>Характеристики:</span>
							</div>
							<div className={classes.specValues}>
								<span className={classes.specValue}>Стеллаж</span>
								<span className={classes.specValue}>111001</span>
								<div className={classes.specValue}>
									<div className={classes.dimensionItem}>
										<span className={classes.dimensionLabel}>Высота</span>
										<span className={classes.dimensionValue}>2200 мм</span>
									</div>
									<div className={classes.dimensionItem}>
										<span className={classes.dimensionLabel}>Ширина</span>
										<span className={classes.dimensionValue}>2400 мм</span>
									</div>
									<div className={classes.dimensionItem}>
										<span className={classes.dimensionLabel}>Глубина</span>
										<span className={classes.dimensionValue}>600 мм</span>
									</div>
								</div>
								<span className={classes.specValue}>
									Металл профильная труба 25*25 мм, порошковая покраска в черный
									муар
								</span>
								<div className={classes.specItem}></div>
							</div>
							<div className={classes.specItem}></div>
						</div>

						<div className={classes.quantitySection}>
							<label className={classes.quantityLabel}>Кол-во</label>
							<div className={classes.quantitySelector}>
								<button
									className={classes.quantityBtn}
									onClick={handleMinusClick}
								>
									<span className={classes.Minus}></span>
								</button>
								<input
									className={classes.quantityInput}
									value={counter}
									onChange={handleInputChange}
									type='number'
									min='1'
								/>
								<button
									className={classes.quantityBtn}
									onClick={handlePlusClick}
								>
									<span className={classes.PlusFirst}></span>
									<span className={classes.PlusSecond}></span>
								</button>
							</div>
						</div>

						<div className={classes.pricing}>
							<div className={classes.currentPrice}>{props.price} ₽</div>
							<div className={classes.oldPrice}>24 000 ₽</div>
						</div>

						<div className={classes.actionButtons}>
							<button
								className={classes.addToCartBtn}
								onClick={() => {
									props.setShopModal(true)
									props.addProduct(props.product, counter)
								}}
							>
								Добавить в корзину
							</button>
							<button className={classes.buyNowBtn}>К оформлению заказа</button>
						</div>
					</div>
				</div>

				<div className={classes.descriptionSection}>
					<h2 className={classes.sectionTitle}>Описание</h2>
					<p className={classes.descriptionText}>{props.description}</p>
				</div>

				<div className={classes.relatedProducts}>
					<div className={classes.sectionHeader}>
						<h2 className={classes.sectionTitle}>
							Вам также может{' '}
							<span className={classes.goldLike}>понравиться</span>
						</h2>
						<div className={classes.carouselNav}>
							<button className={classes.carouselBtn} onClick={prevSlide}>
								<img src={arrowLeftBlack} alt='Previous' />
							</button>
							<button className={classes.carouselBtn} onClick={nextSlide}>
								<img src={arrowRightBlack} alt='Next' />
							</button>
						</div>
					</div>
					<div className={classes.productsCarousel}>
						<div
							style={{
								transform: `translateX(-${
									currentSlideIndex * (isMobile ? 280 : 294)
								}px)`,
								transition: 'transform 0.5s ease-in-out',
								display: 'flex',
								gap: '14px',
								width: `${allProducts.length * 280}px`,
							}}
						>
							{allProducts.map(product => (
								<div key={product.id} className={classes.productCard}>
									<img
										src={
											product?.photo_links && product.photo_links.length > 0
												? product.photo_links[0].startsWith('http')
													? product.photo_links[0]
													: `http://79.174.86.248:8080${product.photo_links[0]}`
												: ''
										}
										alt={product.name}
									/>
									<h3>{product.name}</h3>
									<p className={classes.cardPrice}>от {product.price} / шт</p>
									<div className={classes.cardButtons}>
										<button
											className={classes.detailsBtn}
											onClick={() => navigate(`/product/${product.id}`)}
										>
											Подробнее
										</button>
										<button className={classes.cardCartBtn}>
											<img src={cartIcon} alt='Cart' />В корзину
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailPage
