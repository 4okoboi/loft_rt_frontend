import React, { useRef, useState } from 'react'
import LazyImage from '../LazyImage/LazyImage'
import Materials from '../Materials/Materials'
import classes from './Home.module.css'

import fonImgForPhone from '../../assets/images-webp/fonImgForPhone.webp'

import vertStick from '../../assets/images/vertStick.svg'

import sifsb from '../../assets/images-webp/014 1.webp'
import fofsb from '../../assets/images-webp/1200x1200 1.webp'
import ffsb from '../../assets/images-webp/206e607d3cc87b80ab710c83f0afb753 1.webp'
import sefsb from '../../assets/images-webp/image 60.webp'
import fifsb from '../../assets/images-webp/ot-kati2 1.webp'
import tfsb from '../../assets/images-webp/Stol loft obedennyi Madmas 5 1.webp'

import whiteLogoImg from '../../assets/images/whiteLogoImg.svg'

import barImg from '../../assets/images-webp/barImg.webp'
import restImg from '../../assets/images-webp/restImg.webp'
import salonImg from '../../assets/images-webp/salonImg.webp'

import { NavLink } from 'react-router-dom'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import FormAudit from '../FormAudit/FormAudit'
import OrdBisnesFurn from '../OrdBisnesFurn/OrdBisnesFurn'

const Home: React.FC = props => {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
	}

	const block1 = useRef(null)
	const block2_1 = useRef(null)
	const block2_2 = useRef(null)
	const block3 = useRef(null)
	const block4_1 = useRef(null)
	const block4_2 = useRef(null)
	const block4_3 = useRef(null)
	const block5 = useRef(null)
	const block6_1 = useRef(null)
	const block6_2 = useRef(null)
	const block7 = useRef(null)
	const block8 = useRef(null)
	const block9 = useRef(null)
	const block10 = useRef(null)
	const block11 = useRef(null)
	const block12 = useRef(null)
	const observedElements = [
		block1,
		block2_1,
		block2_2,
		block3,
		block4_1,
		block4_2,
		block4_3,
		block5,
		block6_1,
		block6_2,
		block7,
		block8,
		block9,
		block10,
		block11,
		block12,
	]

	useIntersectionObserver(observedElements, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	})

	return (
		<div className={classes.home}>
			<div className={classes.firstContainer}>
				<div className={classes.logoText} ref={block1}>
					<div className={classes.titleYellow}>LOFT RT</div>
					<div className={classes.logoText2Block}>
						<div className={classes.titleWhite}>МЕБЕЛЬ</div>
						<div className={classes.titleWhite}>ДЛЯ</div>
						<div className={classes.titleYellow}>ВАС</div>
					</div>
				</div>
				<div className={classes.fonImgForPhone} ref={block2_1}>
					<img src={fonImgForPhone} />
				</div>
				<div className={classes.ordButtons}>
					{/* <div className={classes.firstButton}> */}
					<NavLink to={'/for_home'} className={classes.firstButton}>
						Заказать домашнюю мебель
					</NavLink>
					{/* </div> */}
					<div className={classes.line12}></div>
					<div
						className={`${classes.secondButton} ${
							isActive && classes.activeMenu
						}`}
						onClick={handleClick}
					>
						<OrdBisnesFurn />
					</div>
				</div>
			</div>
			<div className={classes.fonImg} ref={block2_2}>
				<div className={classes.homePageKitchenNav}>
					{/* <div className={classes.navSegm}> */}
					<NavLink to={'/business/offices'} className={classes.navSegm}>
						Для бизнеса
					</NavLink>
					{/* </div> */}
					<div className={classes.vertStick}>
						<img src={vertStick} />
					</div>
					{/* <div className={classes.centNavSegm}> */}
					<NavLink to={'/catalog'} className={classes.centNavSegm}>
						Каталог
					</NavLink>
					{/* </div> */}
					<div className={classes.vertStick}>
						<img src={vertStick} />
					</div>
					{/* <div className={classes.navSegm}> */}
					<NavLink to={'/for_home'} className={classes.navSegm}>
						Для дома
					</NavLink>
					{/* </div> */}
				</div>
			</div>
			<div className={classes.workWithLove} ref={block3}>
				<div className={classes.titleWhite}>Работаем исключительно </div>
				<div className={classes.workWithLove15_6}></div>
				<div className={classes.titleYellow}>с любовью</div>
			</div>
			<div className={classes.secondContainer}>
				<div className={classes.firstDiv} ref={block4_1}>
					<div className={classes.bigImg}>
						<LazyImage
							src={ffsb}
							alt='Мебель LOFT RT'
							className={classes.lazyImg}
						/>
					</div>
					<div className={classes.smallImg}>
						<LazyImage
							src={sefsb}
							alt='Пример мебели'
							className={classes.lazyImg}
						/>
					</div>
					<div className={classes.smallImg}>
						<LazyImage src={tfsb} alt='Стол лофт' className={classes.lazyImg} />
					</div>
				</div>
				<div className={classes.secondDiv} ref={block4_2}>
					<div className={classes.smallImg}>
						<img src={fofsb} />
					</div>
					<div className={classes.smallImg}>
						<img src={fifsb} />
					</div>
					<div className={classes.bigImg}>
						<img src={sifsb} />
					</div>
				</div>
			</div>
			<div className={classes.alterSecondContainer} ref={block4_3}>
				<div className={classes.bigImg}>
					<img src={sifsb} />
				</div>
				<div className={classes.smallImg}>
					<img src={sefsb} />
				</div>
				<div className={classes.smallImg}>
					<img src={tfsb} />
				</div>
				<div className={classes.bigImg}>
					<img src={fifsb} />
				</div>
			</div>
			<div className={classes.thirdContainer} ref={block5}>
				<div className={classes.miniText}>
					<div>
						Понравилось то, что вы увидели? Хотите себе такую мебель? Так чего
						же вы ждёте? Вы уже знаете, к кому обратиться. Будем ждать вашей
						заявки.
					</div>
				</div>
				<div className={classes.catOrdButtons}>
					<div className={classes.firstButton}>
						<NavLink to={'/catalog'} className={classes.firstButton}>
							В наш каталог
						</NavLink>
					</div>
					<div className={classes.line8}></div>
					<div>
						<NavLink to={'/catalog'} className={classes.secondButton}>
							Заказать мебель
						</NavLink>
					</div>
				</div>
			</div>
			<div className={classes.aboutFurn} ref={block6_1}>
				<div className={classes.titleWhite}>Немного о </div>
				<div className={classes.line15_6}></div>
				<div className={classes.titleYellow}>нашей мебели</div>
			</div>
			<div className={classes.alterSecBigHomeImg} ref={block6_2}>
				<img src={whiteLogoImg} className={classes.alterWhiteLogoImg} />
			</div>
			<div className={classes.fourthContainer} ref={block7}>
				<Materials />
				{/* <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={shicDisImg} /></div>
                        <div className={classes.infBlTitle}><img src={shicDis} /></div>
                        <div className={classes.infBlText}><img src={shicDisText} /></div>
                    </div>
                    <img className={classes.verticalLine14}/>
                    <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={woodImg} /></div>
                        <div className={classes.infBlTitle}><img src={onlyBestMat} /></div>
                        <div className={classes.infBlText}><img src={woodText} /></div>
                    </div>
                    <img className={classes.verticalLine14}/>
                    <div className={classes.infoBlock}>
                        <div className={classes.infBlImg}><img src={smileImg} /></div>
                        <div className={classes.infBlTitle}><img src={bestPrices} /></div>
                        <div className={classes.infBlText}><img src={bestPricesText} /></div>
                    </div> */}
			</div>
			<div className={classes.secBigHomeImg} ref={block8}>
				<img src={whiteLogoImg} className={classes.whiteLogoImg} />
			</div>
			{/* <div className={classes.learnMore}> */}
			<NavLink to={'/about_us'} className={classes.learnMore} ref={block9}>
				Узнать больше
			</NavLink>
			{/* </div> */}
			<div className={classes.fifthContainer} ref={block10}>
				<div className={classes.title1}>
					<div className={classes.titleWhite}>У вас есть </div>
					<div className={classes.line15_6}></div>
					<div className={classes.titleYellow}>ресторан?</div>
				</div>
				<div className={classes.alterFifthContImg}>
					<div>
						<img src={restImg} />
					</div>
				</div>
				<div className={classes.fifthContText}>
					<div className={classes.minTitle}>Отлично!</div>
					<div className={classes.descrText}>
						Soft Loft - это лучший выбор для ресторанов, которые ищут
						качественную мебель в стиле лофт. Наша команда опытных специалистов
						готова предложить широкий выбор мебели, которая не только выглядит
						превосходно, но и прослужит долгое время. Мы гарантируем высокое
						качество каждого изделия и стремимся к тому, чтобы все наши клиенты
						были довольны результатом. Независимо от того, какой будет проект,
						мы готовы принять вызов и создать идеальный интерьер для вашего
						ресторана.
					</div>
					{/* <div className={classes.ordButton}> */}
					<NavLink to={'/business/restaurants'} className={classes.ordButton}>
						Заказать для него мебель
					</NavLink>
					{/* </div> */}
				</div>
				<div className={classes.fifthContImg}>
					<div>
						<img src={restImg} />
					</div>
				</div>
			</div>
			<div className={classes.fifthContainer} ref={block11}>
				<div className={classes.title1}>
					<div className={classes.titleWhite}>У вас есть </div>
					<div className={classes.line15_6}></div>
					<div className={classes.titleYellow}>салон?</div>
				</div>
				<div className={classes.alterFifthContImg}>
					<div>
						<img src={salonImg} />
					</div>
				</div>
				<div className={classes.fifthContText}>
					<div className={classes.minTitle}>Превосходно!</div>
					<div className={classes.descrText}>
						Наша мебель - это идеальный выбор для салонов, которые хотят создать
						уютную и стильную атмосферу. Она сочетает в себе современный дизайн
						и комфорт, что делает ее привлекательной для клиентов. Мебель от
						софт лофт имеет уникальный стиль, который включает в себя элементы
						индустриального дизайна, такие как металлические ножки и каркасы, а
						также натуральные материалы, такие как дерево и кожа. Это делает ее
						идеальной для элегантного, стильного и при этом комфортного салона.
					</div>
					{/* <div className={classes.ordButton}> */}
					<NavLink to={'/business/salons'} className={classes.ordButton}>
						Заказать для него мебель
					</NavLink>
					{/* </div> */}
				</div>
				<div className={classes.fifthContImg}>
					<div>
						<img src={salonImg} />
					</div>
				</div>
			</div>
			<div className={classes.fifthContainer} ref={block12}>
				<div className={classes.title1}>
					<div className={classes.titleWhite}>У вас есть </div>
					<div className={classes.line15_6}></div>
					<div className={classes.titleYellow}>бар </div>
					<div className={classes.line15_6}></div>
					<div className={classes.titleWhite}>или </div>
					<div className={classes.line15_6}></div>
					<div className={classes.titleYellow}>кафе?</div>
				</div>
				<div className={classes.alterFifthContImg}>
					<div>
						<img src={barImg} />
					</div>
				</div>
				<div className={classes.fifthContText}>
					<div className={classes.minTitle}>Замечательно!</div>
					<div className={classes.descrText}>
						Наша мебель идеально подходит для баров и кафе. Она создаст
						атмосферу уюта и комфорта, что особенно важно для заведений, где
						люди приходят отдохнуть и провести время с друзьями. Кроме того,
						мебель от Soft Loft изготавливается из качественных материалов, что
						обеспечивает ее долговечность и надежность. Бары, которые выбирают
						мебель от Soft Loft, могут быть уверены в том, что они их клиенты
						будут в восторге и обязательно вернутся еще не раз.
					</div>
					{/* <div className={classes.ordButton}> */}
					<NavLink to={'/business/bars_cafes'} className={classes.ordButton}>
						Заказать у нас мебель
					</NavLink>
					{/* </div> */}
				</div>
				<div className={classes.fifthContImg}>
					<div>
						<img src={barImg} />
					</div>
				</div>
			</div>
			<FormAudit />
			{/* <div className={classes.title1}>
                    <img src={title5}/>
                </div>
                <div className={classes.seventhContainer}>
                    <div className={classes.firstDiv}>
                        <div className={classes.topBlock}>
                            <div className={classes.ph}><img src={phone}/></div>
                            <div className={classes.nu}>+7 (777) 777 77 77</div>
                        </div>
                        <div className={classes.topBlock}>
                            <div className={classes.tx}><img src={email}/></div>
                            <div className={classes.lg}>loftluxe@gmail.com</div>
                        </div>
                        <div className={classes.topBlock}>
                            <div className={classes.tx}><img src={adress}/></div>
                            <div className={classes.ad1}>Россия, г. Казань,</div>
                            <div className={classes.ad2}>ул. Центральная 91</div>
                        </div>
                    </div>
                    <div className={classes.secondDiv}>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={whatsApp}/></div>
                            <div className={classes.wA}><img src={whatsAppImg}/></div>
                        </div>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={telegram}/></div>
                            <div className={classes.te}><img src={telegramImg}/></div>
                        </div>
                        <div className={classes.bottomBlock}>
                            <div className={classes.tx}><img src={instagram}/></div>
                            <div className={classes.in}><img src={instagramImg}/></div>
                        </div>
                    </div>
                </div> */}
		</div>
	)
}

export default Home
