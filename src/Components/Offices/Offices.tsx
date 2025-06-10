import React, { useRef } from "react"
import classes from "./Offices.module.css"
import {useState} from "react"
import alterFirstImg from "../../assets/images-webp/offices/alterFirstImg.webp"
import firstImg from "../../assets/images-webp/offices/firstImg.webp"
import crookedLine from "../../assets/images/offices/crookedLine.svg"
import SeeBelow from "../SeeBelow/SeeBelow"

import slide1Big from "../../assets/images-webp/offices/slide1Big.webp"
import slide1 from "../../assets/images-webp/offices/slide1.webp"
import slide5 from "../../assets/images-webp/offices/slide5.webp"
import slide2 from "../../assets/images-webp/offices/slide2.webp"
import slide3 from "../../assets/images-webp/offices/slide3.webp"
import slide4 from "../../assets/images-webp/offices/slide4.webp"
import slide3Mini from "../../assets/images-webp/offices/slide3Mini.webp"
import slide4Mini from "../../assets/images-webp/offices/slide4Mini.webp"

import furnExImg1 from "../../assets/images-webp/offices/furnExImg1.webp"
import furnExImg2 from "../../assets/images-webp/offices/furnExImg2.webp"
import furnExImg3 from "../../assets/images-webp/offices/furnExImg3.webp"
import furnExImg4 from "../../assets/images-webp/offices/furnExImg4.webp"
import furnExImg5 from "../../assets/images-webp/offices/furnExImg5.webp"
import furnExImg6 from "../../assets/images-webp/offices/furnExImg6.webp"

import logo from "../../assets/images/Group 4606.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import FormAudit from "../FormAudit/FormAudit"
import Slider from "../../UI/Slider/Slider"
import { NavLink } from "react-router-dom"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"


const Offices = () =>{
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const goToSlide = (index = 0) => {
    //     setCurrentIndex(index);
    // }
    // const slides = [
    //     slide1,
    //     slide2,
    //     slide3,
    //     slide4,
    //     slide5
    // ];
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const block4 = useRef(null)
    const block5 = useRef(null)
    const block6 = useRef(null)
    const block7 = useRef(null)
    const block8 = useRef(null)
    const block9 = useRef(null)
    const block10 = useRef(null)
    const block11 = useRef(null)
    const block12 = useRef(null)
    const block13 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, block6, 
        block7, block8, block9, block10, block11, block12, block13
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    const slides = [slide1, slide2, slide3, slide4, slide5]
    return(
        <div className={classes.offices}>
            <div className={classes.firstContainerBig} ref={block1}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.titleWhite}>ОФИСНАЯ</div>
                        <div className={classes.titleWhite}>МЕБЕЛЬ</div>
                        <div className={classes.titleYellow}>LOFT RT</div>
                    </div>
                </div>
                <div className={classes.alterFirstImg}><img src={alterFirstImg}/></div>
                <div className={classes.firstImg}><img src={firstImg} /></div>
            </div>
            <div className={classes.secondContainer} ref={block2}>
                <div className={classes.vertical49}></div>
                <div className={classes.text1}>Нужна мебель для офиса?</div>
                <div className={classes.crookedLine}><img src={crookedLine} /></div>
                <div className={classes.text2}>
                    <div className={classes.titleWhite}>
                        У нас вы найдете
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        лучшее
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        качество и дизайн, по
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        самой
                    </div>
                </div>
                <div className={classes.text3}>
                    <div className={classes.titleYellow}>
                        справедливой
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        цене
                    </div>
                </div>
            </div>
            <SeeBelow />
            <div className={classes.noneSlider} ref={block3}>
                <Slider slides={slides} />
            </div>
            <div className={classes.alterSlides} ref={block4}>
                <div className={classes.alterSlide}><img src={slide1Big} /></div>
                <div className={classes.alterSlide}><img src={slide5} /></div>
                <div className={classes.alterSlide}><img src={slide2} /></div>
                <div className={classes.alterSlideMini}><img src={slide3Mini} /></div>
                <div className={classes.alterSlideMini}><img src={slide4Mini} /></div>
            </div>
            <div className={classes.exampleText} ref={block5}>
                <div className={classes.titleWhite}>Пример </div>
                <div className={classes.titleWhite}>нашей </div>
                <div className={classes.titleWhite}>мебели </div>
                <div className={classes.titleWhite}>для</div>
                <div className={classes.titleYellow}>офиса</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnBlock} ref={block6}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Прекрасный камод</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантный комод с геометрическими
                        формами и минималистическим дизайном.
                        Идеально подходит для современных
                        интерьеров.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block7}>
                    <div className={classes.avImg}><img src={furnExImg2}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский
                        стеллаж с уникальной геометрической
                        формой, который идеально подходит для
                        любого интерьера.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block8}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Стол с ящиками и тумба</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Набор идеальный  для тех, кто ценит
                        комфорт и элегантность в интерьере.
                        Идеальным выбор для офисного помещения.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block9}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Прямоугольный стол для офиса</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Идеальное решение для тех, кто ценит
                        элегантность и функциональность в своем
                        доме. Ее дизайн и практическая форма
                        создают атмосферу уюта и комфорта.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block10}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
                    <div className={classes.tit}>Офисный стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский
                        стеллаж с уникальной геометрической
                        формой, который идеально подходит для
                        любого интерьера.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block11}>
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Большой стол для собраний</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло "Зелень" - это прекрасный выбор
                        для позитивных людей. Его яркая зеленая
                        обивка и удобная форма позволяют
                        создать атмосферу свежести и легкости.
                    </div>
                </div>
            </div>
            <NavLink to={"/catalog"} className={classes.moreFurnButton} ref={block12}>
                Заказать для него мебель
            </NavLink>
            <div className={classes.fonImg} ref={block13}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересует, как проходит заказ?</div>
                <img src={curvedLine} className={classes.curvedLineImg}/>
                <div className={classes.learnDetailed}>
                    <NavLink to={"/how_it_will_be"} className={classes.learnDetailedNav}>
                        Узнать подробнее
                    </NavLink>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default Offices;