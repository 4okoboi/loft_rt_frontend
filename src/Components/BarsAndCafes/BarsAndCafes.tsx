import React, { useRef } from "react";
import classes from "./BarsAndCafes.module.css"
import secondContImg from "../../assets/images-webp/for_bars_&_cafes/secondContImg.webp"
import alterSecBlockImg from "../../assets/images-webp/for_bars_&_cafes/alterSecBlockImg.webp"
import thirdContImg from "../../assets/images-webp/for_bars_&_cafes/thirdContImg.webp"

import FormAudit from "../FormAudit/FormAudit";
import SeeBelow from "../SeeBelow/SeeBelow";

import fftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont1Img.webp"
import seftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont2Img.webp"
import tftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont3Img.webp"
import foftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont4Img.webp"
import fiftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont5Img.webp"
import siftb from "../../assets/images-webp/for_bars_&_cafes/fourthCont6Img.webp"

import seftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont2Img.webp"
import tftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont3Img.webp"
import fftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont1Img.webp"
import fiftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont5Img.webp"
import foftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont4Img.webp"
import siftb2 from "../../assets/images-webp/for_bars_&_cafes/fourthCont6Img.webp"

import furnEx1Img from "../../assets/images-webp/for_bars_&_cafes/furnEx1Img.webp"
import furnEx2Img from "../../assets/images-webp/for_bars_&_cafes/furnEx2Img.webp"
import furnEx3Img from "../../assets/images-webp/for_bars_&_cafes/furnEx3Img.webp"
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";


const BarsAndCafes = () =>{
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const block4 = useRef(null)
    const block5 = useRef(null)
    const block6 = useRef(null)
    const block7 = useRef(null)
    const block8 = useRef(null)
    const block9 = useRef(null)
    const observedElements = [
        block1, block2, block3, 
        block4, block5, block6, 
        block7, block8, block9
    ];
    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return(
        <div className={classes.barsAndCafes}>
            <div className={classes.firstContainerBig} ref={block1}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.titleWhite}>МЕБЕЛЬ</div>
                        <div className={classes.titleWhite}>ДЛЯ</div>
                        <div className={classes.titleYellow}>БАРОВ</div>
                        <div className={classes.titleYellow}>И</div>
                        <div className={classes.titleYellow}>КАФЕ</div>
                    </div>
                </div>
                <div className={classes.secondContainer}>
                    <img src={secondContImg} className={classes.secondContImg}/>
                </div>
                <div className={classes.alterSecondContainer}>
                    <img src={alterSecBlockImg} className={classes.alterSecondContImg}/>
                </div>
            </div>
            <div className={classes.thirdContainer} ref={block2}>
                <div className={classes.exampleText}>
                    <div className={classes.titleWhite}>У вас есть</div>
                    <div className={classes.titleYellow}>бар или кафе?</div>
                </div>
                <div className={classes.thirdContText}>
                    <div className={classes.titleYellow}>Замечательно!</div>
                    <div className={classes.paragText}>
                        <div>
                            Тут вы найдете самую стильную
                            мебель для баров и кафе. Мы можем
                            гарантировать высшее качество и
                            лучший дизайн нашей продукции.
                        </div>
                    </div>
                </div>
                <img src={thirdContImg} className={classes.thirdContImg}/>
            </div>
            <SeeBelow />
            <div className={classes.fourthContainer}>
                <div className={classes.firstDiv} ref={block3}>
                    <div className={classes.bigImg}><img src={fftb} /></div>
                    <div className={classes.smallImg}><img src={seftb} /></div>
                    <div className={classes.smallImg}><img src={tftb} /></div>
                </div>
                <div className={classes.secondDiv} ref={block4}>
                    <div className={classes.smallImg}><img src={foftb} /></div>
                    <div className={classes.smallImg}><img src={fiftb} /></div>
                    <div className={classes.bigImg}><img src={siftb} /></div>
                </div>
            </div>
            <div className={classes.alterFourthContainer} ref={block5}> 
                <div className={classes.smallImg}><img src={seftb2} /></div>
                <div className={classes.smallImg}><img src={tftb2} /></div>
                <div className={classes.bigImg}><img src={fftb2} /></div>
                <div className={classes.smallImg}><img src={fiftb2} /></div>
                <div className={classes.smallImg}><img src={foftb2} /></div>
                <div className={classes.bigImg}><img src={siftb2} /></div>
            </div>
            <div className={classes.exampleText2} ref={block6}>
                <div className={classes.titleWhite}>Пример нашей мебели </div>
                <div className={classes.titleYellow}>для баров и кафе</div>
            </div>
            <div className={classes.furnExContainer}>
                <div className={classes.furnExMiniCont} ref={block7}>
                    <div className={classes.alterAvImg}><img src={furnEx1Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Высокий стол и 3 стула</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Стильный и удобный столик в сочетании с 
                            элегантными стульями, создают идеальное 
                            пространство, где комфорт сочитается с 
                            современным дизайном.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же набор
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx1Img}/></div>
                </div>
                <div className={classes.furnExMiniCont} ref={block8}>
                    <div className={classes.alterAvImg}><img src={furnEx2Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Раскошный круглый стол</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Современный дизайнерский круглый стол, 
                            созданный для тех, кто ценит комфорт и 
                            элегантность в интерьере. Идеальным выбор 
                            для любого помещения.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же столик
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx2Img}/></div>
                </div>
                <div className={classes.furnExMiniCont} ref={block9}>
                    <div className={classes.alterAvImg}><img src={furnEx3Img}/></div>
                    <div className={classes.furnExContText}>
                        <div className={classes.tit}>Прямоугольный стол для кафе</div>
                        <div className={classes.siz}>130см на 240см</div>
                        <div className={classes.tex}>
                            Изысканный и функциональный стол для 
                            кафе, который обеспечивает комфортное 
                            пространство для общения и наслаждения 
                            вкусной едой и напитками.
                        </div>
                        {/* <button className={classes.moreFurnButton}> */}
                            <NavLink to={"/catalog"} className={classes.moreFurnButton}>
                                Заказать такой же стол
                            </NavLink>
                        {/* </button> */}
                    </div>
                    <div className={classes.avImg}><img src={furnEx3Img}/></div>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default BarsAndCafes;