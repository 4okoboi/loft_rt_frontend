import React, { useRef } from "react"
import classes from "./AboutUs.module.css"

import firstImg1 from "../../assets/images-webp/about_us/b0084270453117 1.webp"
import firstImg2 from "../../assets/images-webp/about_us/firstImg2.webp"
import readBelow from "../../assets/images/about_us/Читай_ниже.svg"
import whiteLogoImg from "../../assets/images/about_us/whiteLogoImg.svg";

import loftLuxeTitleImg from "../../assets/images/about_us/Loft&LuxeImg.svg"

import fotoMotok from "../../assets/images-webp/about_us/fotoMotok.webp"
import alterFotoMotok from "../../assets/images-webp/about_us/alterFotoMotok.webp"
import Materials from "../Materials/Materials"
import logo from "../../assets/images/about_us/Group 4703.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import { NavLink } from "react-router-dom"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const AboutUs = () =>{
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
    const block15 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, 
        block6, block7, block8, block9, block10, 
        block11, block12, block13, block14, block15
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    return(
        <div className={classes.aboutUs}>
            <div className={classes.aboutLoftLuxe} ref={block1}>
                <span className={classes.spanWhite}>НЕМНОГО О</span>
                <span className={classes.spanYellow}>LOFT RT</span>
            </div>
            <div className={classes.firstImg} ref={block2}>
                <img src={firstImg1} className={classes.firstImg1}/>
                <img src={firstImg2} className={classes.firstImg2}/>
            </div>
            <div className={classes.readBelow} ref={block3}><img src={readBelow} /></div>
            <div className={classes.firstContainer} ref={block4}>
                <div className={classes.firstContText}>
                    <div className={classes.loftLuxeTitle}><img src={loftLuxeTitleImg}/></div>
                    <div className={classes.paragText}>
                        <div>
                            В начале 2000-х годов мы, группа
                            друзей из Казани, приняли решение о
                            создании собственного бизнеса. Нас
                            увлекал стиль лофт, и мы решили
                            производить мебель в этом жанре.
                        </div>
                    </div>
                </div>
                <div className={classes.firstContImg}>
                    <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
                </div>
            </div>
            <div className={classes.alterFirstContImg} ref={block5}>
                <img src={whiteLogoImg} className={classes.alterWhiteLogoImg}/>
            </div>
            <div className={classes.paragsCont}>
                <div className={classes.parags} ref={block6}>Наша компания начала свою деятельность в гараже одного из нас, используя старые доски и металлические трубы для создания уникальной мебели в стиле лофт. Наши первые продукты были простыми, но элегантными - столы, стулья и полки.</div>
                <div className={classes.parags} ref={block7}>Начальный этап продаж мы осуществляли на ярмарках и рынках. Однако, вскоре мы получили первый заказ от небольшого кафе в центре города, желавшего создать атмосферу лофта. Мы успешно выполнели заказ, и наша компания начала получать все больше заказов. Расширив свой ассортимент, мы начали производить другую мебель для дома, магазина, офиса, кафе, ресторанов, баров и салонов красоты.</div>
                <div className={classes.parags} ref={block8}>С каждым годом наша компания росла и развивалась. Мы переехали в большое производственное помещение и наняли новых сотрудников. Наша компания начала доставлять свою мебель в другие города, и наши продукты стали популярными во всем мире.</div>
                <div className={classes.parags} ref={block9}>В настоящее время мы являемся лидером в производстве мебели в стиле лофт. Мы используем только высококачественные материалы и создаем уникальные, стильные и функциональные изделия. Наша компания продолжает расти и развиваться, сохраняя при этом свой уникальный стиль и качество.</div>
            </div>

            <div className={classes.centerTitle} ref={block10}>
                <div className={classes.spanWhite}>Немного о </div>
                <div className={classes.spanYellow}>нашей мебели</div>
            </div>

            <div className={classes.alterBigImg} ref={block11}>
                <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
            </div>

            <Materials />

            <div className={classes.bigImg} ref={block12}>
                <img src={whiteLogoImg} className={classes.whiteLogoImg}/>
            </div>

            {/* <button className={classes.learnMoreButton}> */}
                <NavLink to={"/how_it_will_be"} className={classes.learnMoreButton} ref={block13}>
                    Узнать больше
                </NavLink>
            {/* </button> */}

            <div className={classes.fonImg} ref={block14}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересует, как проходит заказ?</div>
                <div className={classes.curvedLineImg}><img src={curvedLine}/></div>
                <div className={classes.learnDetailed}>
                    <NavLink to={"/how_it_will_be"} className={classes.learnDetailedNav}>
                        Узнать подробнее
                    </NavLink>
                </div>
            </div>

            <div className={classes.warehouses} ref={block15}>
                <div className={classes.warehousesTitle}>Наши склады - это только лучшее сырье и идеальные условия хранения</div>
                <div className={classes.warehousesText}>Мы гордимся нашими современными складами материалов, которые обеспечивают нам быстрый доступ к широкому ассортименту высококачественных материалов для производства мебели. Ведь только лучшие условия храенения могут обеспечить высшее качесто материалов.</div>
                <div className={classes.warehousesImg}><img src={fotoMotok} /></div>
                <div className={classes.alterWarehousesImg}><img src={alterFotoMotok} /></div>
            </div>
        </div>
    );
};

export default AboutUs;