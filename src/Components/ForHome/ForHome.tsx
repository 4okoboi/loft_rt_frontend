import React, { useRef } from "react";
import classes from "./ForHome.module.css";

import crookedLine from "../../assets/images/for_home/КриваяЛиния.svg"
import forHomeFirstImg from "../../assets/images-webp/for_home/forHomeFirstImg.webp"
import forHomeSecondImg from "../../assets/images-webp/for_home/forHomeSecondImg.webp"
import forHomeThirdImg from "../../assets/images-webp/for_home/forHomeThirdImg.webp"
import alterForHomeThirdImg from "../../assets/images-webp/for_home/alterForHomeThirdImg.webp"
import miniLogo from "../../assets/images/for_home/miniLogo.svg"
import arrowDown from "../../assets/images/for_home/arrowDown.svg"
import block2img1 from "../../assets/images-webp/for_home/block2img1.webp"
import block2img2 from "../../assets/images-webp/for_home/block2img2.webp"
import block2img3 from "../../assets/images-webp/for_home/block2img3.webp"
import block2img4 from "../../assets/images-webp/for_home/block2img4.webp"

import block3img1 from "../../assets/images-webp/for_home/block3img1.webp"
import block3img2 from "../../assets/images-webp/for_home/block3img2.webp"
import alterBlock3img2 from "../../assets/images-webp/for_home/alterBlock3img2.webp"

import furnExImg1 from "../../assets/images-webp/for_home/furnExImg1.webp"
import furnExImg2 from "../../assets/images-webp/for_home/furnExImg2.webp"
import furnExImg3 from "../../assets/images-webp/for_home/furnExImg3.webp"
import furnExImg4 from "../../assets/images-webp/for_home/furnExImg4.webp"
import furnExImg5 from "../../assets/images-webp/for_home/furnExImg5.webp"
import furnExImg6 from "../../assets/images-webp/for_home/furnExImg6.webp"
import FormAudit from "../FormAudit/FormAudit";

import logo from "../../assets/images/for_home/logo.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";


const ForHome = () =>{
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
    const block16 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, 
        block5, block6, block7, block8, 
        block9, block10, block11, block12, 
        block13, block14, block15, block16
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return(
        <div className={classes.forHome}>
            <div className={classes.titleBlock} ref={block1}>
                <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ</div>
                <div className={classes.line15_6}></div>
                <div className={classes.titleYellow}>ВАШЕГО ДОМА</div>
                <div className={classes.crookedLine} >
                    <img src={crookedLine}/>
                </div>
            </div>
            <div className={classes.firstCont} ref={block2}>
                <img src={forHomeFirstImg} />
                <img src={forHomeSecondImg}/>
                <img src={forHomeThirdImg} className={classes.bottomImg}/>
                <img src={alterForHomeThirdImg} className={classes.alterBottomImg}/>
            </div>
            <div className={classes.miniTextTop} ref={block3}>
                <div className={classes.miniLogo} >
                    <img src={miniLogo} />
                </div>
                <div className={classes.titleWhite}>
                    Loft & Luxe
                </div>
                <div className={classes.titleWhite}>
                    гарантирует
                </div>
                <div className={classes.titleWhite}>
                    вам,
                </div>
                <div className={classes.titleWhite}>
                    что
                </div>
                <div className={classes.titleYellow}>
                    наша мебель
                </div>
                <div className={classes.titleWhite}>
                    станет
                </div>
                <div className={classes.titleWhite}>
                    вашей
                </div>
                <div className={classes.titleYellow}>
                    любимой мебелью
                </div>
            </div>
            <div className={classes.checkBelow} ref={block4}>
                <div className={classes.checkBelowText}>Убедитесь ниже</div>
                <div className={classes.checkBelowImg}><img src={arrowDown} /></div>
            </div>

            <div className={classes.alterTopBlock3} ref={block4}>
                <img src={block3img1} />
            </div>

            <div className={classes.block2} ref={block5}>
                <div><img src={block2img1} /></div>
                <div><img src={block2img2} className={classes.firstCentrImg} /></div>
                <div><img src={block2img3} className={classes.secondCentrImg} /></div>
                <div><img src={block2img4} /></div>
            </div>

            <div className={classes.alterBottomBlock3} ref={block6}>
                <img src={alterBlock3img2} />
            </div>

            <div className={classes.block3} ref={block7}>
                <div><img src={block3img1} className={classes.leftCentrImg}/></div>
                <div><img src={block3img2} className={classes.rightCentrImg} /></div>
            </div>

            <div className={classes.furnExComt}>
                <div className={classes.exampleText} ref={block8}>
                    <div className={classes.titleWhite}>Пример</div>
                    <div className={classes.titleWhite}>нашей</div>
                    <div className={classes.titleWhite}>мебели</div>
                    <div className={classes.titleWhite}>для</div>
                    <div className={classes.titleYellow}>дома</div>
                </div>
                <div className={classes.furnBlock} ref={block9}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Большой обеденный стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Обеденный стол, гармонично сочетающий в
                        себе практичность и дизайн, создает 
                        идеальную атмосферу для наслаждения 
                        блюдами в кругу близких людей.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block10}>
                    <div className={classes.avImg}><img src={furnExImg2}/></div>
                    <div className={classes.tit}>Стол “Клеопатра”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стол "Клеопатра" - это воплощение
                        роскоши и изысканности. Его изящные
                        линии и безупречное исполнение придают
                        интерьеру шарм и элегантность.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block11}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Уютное кресло</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло для тех, кто ценит комфорт и уют.
                        Его мягкая обивка и удобная форма
                        позволяют расслабиться и насладиться
                        моментом отдыха.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block12}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Тумба “Аркана”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Идеальное решение для тех, кто ценит
                        элегантность и функциональность в своем
                        доме. Ее дизайн и практическая форма
                        создают атмосферу уюта и комфорта.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block13}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский
                        стеллаж с уникальной геометрической
                        формой, который идеально подходит для
                        любого интерьера.
                    </div>
                </div>
                <div className={classes.furnBlock} ref={block14}>
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Кресло “Зелень”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло "Зелень" - это прекрасный выбор
                        для позитивных людей. Его яркая зеленая
                        обивка и удобная форма позволяют
                        создать атмосферу свежести и легкости.
                    </div>
                </div>
            </div>
            
            {/* <button className={classes.moreFurnButton}> */}
                <NavLink to={"/business/bars_cafes"} className={classes.moreFurnButton} ref={block15}>
                    Больше мебели в нашем каталоге
                </NavLink>
            {/* </button> */}
            <div className={classes.fonImg} ref={block16}>
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

export default ForHome;