import React, { useRef } from "react";
import classes from "./Shops.module.css"
import secBlock1Img from "../../assets/images-webp/shops/secBlock1Img.webp"
import secBlock2Img from "../../assets/images-webp/shops/secBlock2Img.webp"
import alterSecBlock1Img from "../../assets/images-webp/shops/alterSecBlock1Img.webp"
import alterSecBlock2Img from "../../assets/images-webp/shops/alterSecBlock2Img.webp"
import thirdContImg from "../../assets/images-webp/shops/thirdContImg.webp"

import FormAudit from "../FormAudit/FormAudit";
import SeeBelow from "../SeeBelow/SeeBelow";

import fftb from "../../assets/images-webp/shops/fourthCont1Img.webp"
import seftb from "../../assets/images-webp/shops/fourthCont2Img.webp"
import tftb from "../../assets/images-webp/shops/fourthCont3Img.webp"
import foftb from "../../assets/images-webp/shops/fourthCont4Img.webp"
import fiftb from "../../assets/images-webp/shops/fourthCont5Img.webp"
import siftb from "../../assets/images-webp/shops/fourthCont6Img.webp"

import furnEx1Img from "../../assets/images-webp/shops/furnEx1Img.webp"
import furnEx2Img from "../../assets/images-webp/shops/furnEx2Img.webp"
import furnEx3Img from "../../assets/images-webp/shops/furnEx3Img.webp"
import { NavLink } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";


const Shops = () =>{
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
        <div className={classes.shops}>
            <div className={classes.firstContainerBig} ref={block1}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ</div>
                        <div className={classes.titleYellow}>МАГАЗИНОВ</div>
                    </div>
                </div>
                <div className={classes.secondContainer}>
                    <div className={classes.leftImg}><img src={secBlock1Img}/></div>
                    <div className={classes.rigthImg}><img src={secBlock2Img}/></div>
                </div>
                <div className={classes.alterSecondContainer}>
                    <div className={classes.leftImg}><img src={alterSecBlock1Img}/></div>
                    <div className={classes.rigthImg}><img src={alterSecBlock2Img} /></div>
                </div>
            </div>
            <div className={classes.thirdContainer} ref={block2}>
                <div className={classes.exampleText}>
                    <div className={classes.titleWhite}>У вас есть</div>
                    <div className={classes.titleYellow}>магазин?</div>
                </div>
                <div className={classes.thirdContText}>
                    <div className={classes.titleYellow}>Прекрасно!</div>
                    <div className={classes.paragText}>
                        <div>
                            Приобретая мебель у нас, вы можете быть
                            уверены, что ваш магазин будет выглядеть
                            элегантно и стильно, а ваши гости будут
                            чувствовать себя комфортно и уютно.
                        </div>
                    </div>
                </div>
                <img src={thirdContImg} className={classes.thirdContImg}/>
            </div>
            <SeeBelow />
            <div className={classes.fourthContainer} ref={block3}>
                <div className={classes.firstDiv}>
                    <div className={classes.smallImg}><img src={fftb} /></div>
                    <div className={classes.smallImg}><img src={seftb} /></div>
                    <div className={classes.bigImg}><img src={tftb} /></div>
                </div>
                <div className={classes.secondDiv}>
                    <div className={classes.bigImg}><img src={foftb} /></div>
                    <div className={classes.smallImg}><img src={fiftb} /></div>
                    <div className={classes.smallImg}><img src={siftb} /></div>
                </div>
            </div>
            <div className={classes.alterFourthContainer} ref={block4}>
                <div className={classes.bigImg}><img src={tftb} /></div>
                <div className={classes.smallImg}><img src={fftb} /></div>
                <div className={classes.smallImg}><img src={seftb} /></div>
                <div className={classes.bigImg}><img src={foftb} /></div>
                <div className={classes.smallImg}><img src={fiftb} /></div>
                <div className={classes.smallImg}><img src={siftb} /></div>
            </div>
            <div className={classes.exampleText} ref={block5}>
                <div className={classes.titleWhite}>Пример нашей</div>
                <div className={classes.titleYellow}>мебели для магазинов</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnExComtBlock} ref={block6}>
                    <div className={classes.avImg}><img src={furnEx1Img}/></div>
                    <div className={classes.tit}>Интересный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Интересный стеллаж с геометрическими 
                        формами и минималистическим дизайном. 
                        Идеально подходит для современных 
                        интерьеров.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
                <div className={classes.furnExComtBlock} ref={block7}>
                    <div className={classes.avImg}><img src={furnEx2Img}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский 
                        стеллаж с уникальной геометрической 
                        формой, который идеально подходит для 
                        любого интерьера.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
                <div className={classes.furnExComtBlock} ref={block8}>
                    <div className={classes.avImg}><img src={furnEx3Img}/></div>
                    <div className={classes.tit}>Большой стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Современный дизайнерский стеллаж, 
                        созданный для тех, кто ценит элегантность 
                        в интерьере. Идеальным выбор для 
                        любого помещения.
                    </div>
                    {/* <button className={classes.dopMoreFurnButton}> */}
                        <NavLink to={"/catalog"} className={classes.dopMoreFurnButton}>
                            Заказать такой же набор
                        </NavLink>
                    {/* </button> */}
                </div>
            </div>
            {/* <button className={classes.moreFurnButton}> */}
                <NavLink to={"/catalog"} className={classes.moreFurnButton} ref={block9}>
                    Перейти в полный каталог
                </NavLink>
            {/* </button> */}
            <FormAudit />
        </div>
    );
};

export default Shops;