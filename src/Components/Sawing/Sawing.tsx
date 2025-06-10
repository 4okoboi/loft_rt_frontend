import React, { useRef } from "react";
import classes from "./Sawing.module.css";

import loftLogo from "../../assets/images/sawing/loftLogo.svg"

import secCont1Img from "../../assets/images-webp/sawing/secCont1Img.webp"
import secCont2Img from "../../assets/images-webp/sawing/secCont2Img.webp"
import secCont3Img from "../../assets/images-webp/sawing/secCont3Img.webp"
import alterSecCont3Img from "../../assets/images-webp/sawing/alterSecCont3Img.webp"

import advantageImg from "../../assets/images/sawing/advantageImg.png"

import logo1Img from "../../assets/images/sawing/logo1Img.svg"
import logo2Img from "../../assets/images/sawing/logo2Img.svg"
import logo3Img from "../../assets/images/sawing/logo3Img.svg"

import fifthCont1Img from "../../assets/images-webp/welding/fifthCont1Img.webp"
import fifthCont2Img from "../../assets/images-webp/welding/fifthCont2Img.webp"
import fifthCont3Img from "../../assets/images-webp/welding/fifthCont3Img.webp"
import fifthCont4Img from "../../assets/images-webp/welding/fifthCont4Img.webp"
import fifthCont5Img from "../../assets/images-webp/sawing/fifthCont5Img.webp"
import fifthCont6Img from "../../assets/images-webp/sawing/fifthCont6Img.webp"
import fifthCont7Img from "../../assets/images-webp/welding/fifthCont7Img.webp"
import fifthCont8Img from "../../assets/images-webp/sawing/fifthCont8Img.webp"

import FormAudit from "../FormAudit/FormAudit";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Sawing: React.FC = (props) => {
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
    
    return (
        <div className={classes.sawing}>
            <div className={classes.firstContainer} ref={block1}>
                <div className={classes.logoText}>
                    <div className={classes.sawingTitleYellow}>
                        РАСПИЛ
                    </div>
                    <div className={classes.titleWhite}>
                        ЛДСП, МДФ, ДСП
                    </div>
                </div>
                <div className={classes.fonImg}></div>
            </div>
            <div className={classes.loftLogo} ref={block2}><img src={loftLogo}/></div>
            <div className={classes.underLogoText} ref={block3}>
                <div className={classes.titleYellow}>Мы – лидирующее предпиятие,</div>
                <div className={classes.titleWhite}> обеспечивающая лучшее </div>
                <div className={classes.titleWhite}>качество работы с </div>
                <div className={classes.titleYellow}>ЛДСП, МДФ, ДСП.</div>
                <div className={classes.titleWhite}>Мы работаем </div>
                <div className={classes.titleWhite}>только с </div>
                <div className={classes.titleWhite}>лучшими производителями:</div>
            </div>
            <div className={classes.partnersLogo} ref={block4}>
                <img className={classes.logo1Img} src={logo1Img} />
                <img className={classes.logo2Img} src={logo2Img}/>
                <img className={classes.logo3Img} src={logo3Img}/>
            </div>
            <div className={classes.firstTitle} ref={block5}>
                <div className={classes.titleWhite}>Что такое </div>
                <div className={classes.titleYellow}>распил </div>
                <div className={classes.titleWhite}>и для чего он нужен? </div>
            </div>
            <div className={classes.paragsCont} ref={block6}>
                Распилом или раскроем принято называть изготовление мебельных деталей из листов ЛДСП, МДФ или ДСП , а также нанесение кромки на торцы и сверление необходимых для сборки отверстий.
            </div>
            <div className={classes.secondContainer} ref={block7}>
                <img src={secCont1Img} />
                <img src={secCont2Img}/>
                <img src={secCont3Img} className={classes.bottomImg}/>
                <img src={alterSecCont3Img} className={classes.alterBottomImg}/>
            </div>
            <div className={classes.sevenStages} ref={block8}>
                <div className={classes.titleWhite}>Заказ делится всего на </div>
                <div className={classes.titleYellow}>7 этапов</div>
            </div>
            <div className={classes.fifthContainer}>
                <div className={classes.fifthBlock1} ref={block9}>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>1</div>
                            <div className={classes.title}>
                                <div>
                                    Консультация и 
                                </div>
                                <div>
                                    выбор продукции
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Вы связываетесь с нами и обсуждаете свои требования и предпочтения относительно ЛДСП: размеры, цвет, текстура, толщина и другие характеристики.
                        </div>
                    </div>
                    <div className={classes.imgSide}><img src={fifthCont1Img} /></div>
                </div>
                <div className={classes.fifthBlock2} ref={block10}>
                    <div className={classes.imgSide}><img src={fifthCont2Img} /></div>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>2</div>
                            <div className={classes.title}>
                                <div>
                                    Получение коммерческого 
                                </div>
                                <div>
                                    предложения
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Мы предоставляем вам коммерческое предложение, включающее цены, наличие продукции, условия оплаты, сроки поставки и другие детали.
                        </div>
                    </div>
                    <div className={classes.alerImgSide}><img src={fifthCont2Img} /></div>
                </div>
                <div className={classes.fifthBlock1} ref={block11}>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>3</div>
                            <div className={classes.title}>
                                <div>
                                    Уточнение деталей и 
                                </div>
                                <div>
                                    заключение договора
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            После получения предложения уточняются все детали заказа, в том числе количество, спецификации и сроки поставки. Заключается договор между вами и поставщиком.
                        </div>
                    </div>
                    <div className={classes.imgSide}><img src={fifthCont4Img} /></div>
                </div>
                <div className={classes.fifthBlock2} ref={block12}>
                    <div className={classes.imgSide}><img src={fifthCont3Img} /></div>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>4</div>
                            <div className={classes.title}>
                                <div>
                                    Оплата заказа
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Вы осуществляете оплату заказа в соответствии с условиями, указанными в договоре. Это может быть предоплата, оплата частями или полная оплата перед поставкой.
                        </div>
                    </div>
                    <div className={classes.alerImgSide}><img src={fifthCont3Img} /></div>
                </div>
                <div className={classes.fifthBlock1} ref={block13}>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>5</div>
                            <div className={classes.title}>
                                <div>
                                    Изготовление и 
                                </div>
                                <div>
                                    подготовка к поставке
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Мы начинаем изготовление ЛДСП согласно Вашему заказу. При необходимости мы готовим продукцию к транспортировке.
                        </div>
                    </div>
                    <div className={classes.imgSide}><img src={fifthCont5Img} /></div>
                </div>
                <div className={classes.fifthBlock2} ref={block14}>
                    <div className={classes.imgSide}><img src={fifthCont6Img} /></div>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>6</div>
                            <div className={classes.title}>
                                <div>
                                    Контроль качества
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Мы проверяем ЛДСП на предмет сколов и царапин, чтобы готовый продукт соответствовал высшему качеству.
                        </div>
                    </div>
                    <div className={classes.alerImgSide}><img src={fifthCont6Img} /></div>
                </div>
                <div className={classes.fifthBlock1} ref={block15}>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>7</div>
                            <div className={classes.title}>
                                <div>
                                    Доставка и приемка
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            ЛДСП поставляется к вам в указанное место. После получения вы проверяете товар на соответствие заказу и его целостность.
                        </div>
                    </div>
                    <div className={classes.imgSide}><img src={fifthCont7Img} /></div>
                </div>
                <div className={classes.fifthBlock2} ref={block16}>
                    <div className={classes.imgSide}><img src={fifthCont8Img} /></div>
                    <div className={classes.textSide}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>8</div>
                            <div className={classes.title}>
                                <div>
                                    Установка и использование
                                </div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            После проверки и приемки ЛДСП вы приступаете к его установке и использованию в соответствии с вашими планами.
                        </div>
                    </div>
                    <div className={classes.alerImgSide}><img src={fifthCont8Img} /></div>
                </div>
            </div>
            <FormAudit />
        </div>
    );
}

export default Sawing;