import React, { useRef } from "react";
import classes from "./Salons.module.css"
import alterFirstImg from "../../assets/images-webp/salons/alterFirstImg.webp"
import firstImg from "../../assets/images-webp/salons/firstImg.webp"
import crookedLine from "../../assets/images/salons/crookedLine.svg"
import SeeBelow from "../SeeBelow/SeeBelow";

import slide1Big from "../../assets/images-webp/salons/slide1Big.webp"
import slide1 from "../../assets/images-webp/salons/slide1.webp"
import slide4 from "../../assets/images-webp/salons/slide4.webp"
import slide2 from "../../assets/images-webp/salons/slide2.webp"
import slide3 from "../../assets/images-webp/salons/slide3.webp"
import slide3Big from "../../assets/images-webp/salons/slide3Big.webp"

import furnExImg1 from "../../assets/images-webp/salons/furnExImg1.webp"
import furnExImg2 from "../../assets/images-webp/salons/furnExImg2.webp"
import furnExImg3 from "../../assets/images-webp/salons/furnExImg3.webp"
import furnExImg4 from "../../assets/images-webp/salons/furnExImg4.webp"
import furnExImg5 from "../../assets/images-webp/salons/furnExImg5.webp"
import furnExImg6 from "../../assets/images-webp/salons/furnExImg6.webp"

import logo from "../../assets/images-webp/Group 4606.webp"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import FormAudit from "../FormAudit/FormAudit";
import { NavLink } from "react-router-dom";
import Slider from "../../UI/Slider/Slider";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";



const Salons = () => {
    const slides = [slide1, slide2, slide3, slide4]
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
    const block14 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, block6, block7, 
        block8, block9, block10, block11, block12, block13, block14 
    ];
    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return(
        <div className={classes.salons}>
            <div className={classes.firstContainer} ref={block1}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>МЕБЕЛЬ </div>
                    <div className={classes.titleWhite}>ДЛЯ </div>
                    <div className={classes.titleYellow}>САЛОНОВ</div>
                </div>
            </div>
            <div className={classes.alterFirstImg} ref={block2}><img src={alterFirstImg} /></div>
            <div className={classes.firstImg} ref={block3}><img src={firstImg} /></div>
            <div className={classes.secondContainer} ref={block4}>
                <div className={classes.vertical49}></div>
                <div className={classes.text1}>Нужна мебель для салонов?</div>
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
            <div className={classes.noneSlider} ref={block5}>
                <Slider slides={slides} />
            </div>
            <div className={classes.alterSlides} ref={block6}>
                <div className={classes.alterSlideBig}><img src={slide1Big} /></div>
                <div className={classes.alterSlide}><img src={slide4} /></div>
                <div className={classes.alterSlide}><img src={slide2} /></div>
                <div className={classes.alterSlideBig}><img src={slide3Big} /></div>
            </div>
            <div className={classes.exampleText} ref={block7}>
                <div className={classes.titleWhite}>Пример нашей мебели</div>
                <div className={classes.titleWhite}>для </div>
                <div className={classes.titleYellow}>салонов</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnBlock} ref={block8}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Элегантная обувница</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантная обувница с геометрическими 
                        формами и минималистическим дизайном. 
                        Идеально подходит для современных 
                        интерьеров.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block9}>
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
                <div className={classes.furnBlock} ref={block10}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Раскошный стеллаж и стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Современный дизайнерский круглый стол, 
                        созданный для тех, кто ценит комфорт и 
                        элегантность в интерьере. Идеальным 
                        выбор для любого помещения.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block11}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Прямоугольный стол для салона</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Изысканный и функциональный стол для 
                        кафе, который обеспечивает комфортное 
                        пространство продуктивной работы.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block12}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
                    <div className={classes.tit}>Салонный стул</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантный и удобный стул для салона, 
                        который сочетает в себе функциональность 
                        и стильный дизайн, создавая идеальное 
                        рабочее пространство.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block13}>
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Стол и два стула</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Soft Loft - это лучший выбор для салонов, 
                        которые ищут качественную мебель 
                        вкоманда опытных специалистов готова 
                        предложить
                    </div>
                </div>
            </div>
            <NavLink to={"/catalog"} className={classes.moreFurnButton} ref={block14}>
                Перейти в полный каталог
            </NavLink>
            <FormAudit />
        </div>
    );
};

export default Salons;