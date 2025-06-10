import React, { useRef } from "react";
import classes from "./Painting.module.css";

import loftLogo from "../../assets/images/sawing/loftLogo.svg"

import secCont1Img from "../../assets/images-webp/painting/secCont1Img.webp"
import secCont2Img from "../../assets/images-webp/painting/secCont2Img.webp"
import secCont3Img from "../../assets/images-webp/painting/secCont3Img.webp"
import alterSecCont3Img from "../../assets/images-webp/painting/alterSecCont3Img.webp"

import logo1Img from "../../assets/images/painting/logo1Img.svg"
import logo2Img from "../../assets/images/painting/logo2Img.svg"
import logo3Img from "../../assets/images/painting/logo3Img.svg"

import fifthCont1Img from "../../assets/images-webp/welding/fifthCont1Img.webp"
import fifthCont2Img from "../../assets/images-webp/welding/fifthCont2Img.webp"
import fifthCont3Img from "../../assets/images-webp/painting/fifthCont3Img.webp"
import fifthCont4Img from "../../assets/images-webp/painting/fifthCont4Img.webp"
import fifthCont5Img from "../../assets/images-webp/sawing/fifthCont6Img.webp"
import fifthCont6Img from "../../assets/images-webp/painting/fifthCont6Img.webp"
import fifthCont7Img from "../../assets/images-webp/welding/fifthCont3Img.webp"

import FormAudit from "../FormAudit/FormAudit";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Painting: React.FC = (props) => {
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
    const block17 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, block6, block7, block8, block9, 
        block10, block11, block12, block13, block14, block15, block16, block17
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    
        return (
            <div className={classes.painting}>
                <div className={classes.firstContainer} ref={block1}>
                    <div className={classes.logoText}>
                        <div className={classes.sawingTitleYellow}>
                            LOFT RT
                        </div>
                        <div className={classes.titleWhite}>
                            ПОРОШКОВАЯ ПОКРАСКА
                        </div>
                    </div>
                    <div className={classes.alterLogoText}>
                        <div className={classes.titleYellow}>
                            ПОРОШКОВАЯ
                        </div>
                        <div className={classes.titleWhite}>
                            ПОКРАСКА
                        </div>
                    </div>
                    <div className={classes.fonImg}></div>
                </div>
                <div className={classes.loftLogo} ref={block2}><img src={loftLogo}/></div>
                <div className={classes.underLogoText} ref={block3}>
                    <div className={classes.titleYellow}>Мы – лучшая компания среди </div>
                    <div className={classes.titleYellow}>конкурентов, </div>
                    <div className={classes.titleWhite}>обеспечивающая </div>
                    <div className={classes.titleWhite}>качество работы с </div>
                    <div className={classes.titleYellow}>порошковой </div>
                    <div className={classes.titleYellow}>покраски. </div>
                    <div className={classes.titleWhite}>Мы работаем </div>
                    <div className={classes.titleWhite}>только с </div>
                    <div className={classes.titleWhite}>лучшими производителями:</div>
                </div>
                <div className={classes.partnersLogo} ref={block4}>
                    <img className={classes.logo1Img} src={logo1Img} />
                    <img className={classes.alterlogo3Img} src={logo3Img}/>
                    <img className={classes.logo2Img} src={logo2Img}/>
                    <img className={classes.logo3Img} src={logo3Img}/>
                </div>
                <div className={classes.firstTitle} ref={block5}>
                    <div className={classes.titleWhite}>Что такое </div>
                    <div className={classes.titleYellow}>порошковая </div>
                    <div className={classes.titleYellow}>покраска </div>
                    <div className={classes.titleWhite}>и чем она </div>
                    <div className={classes.titleWhite}>отличается от обычной?</div>
                </div>
                <div className={classes.paragsCont} ref={block6}>
                    Порошковая покраска — это процесс нанесения покрытия на поверхность различных материалов. 
                    В отличие от жидкой краски, порошковая покраска осуществляется путем электростатического распыления 
                    порошка на предварительно подготовленную поверхность.
                </div>
                <div className={classes.paragsCont} ref={block7}>
                    Порошковая краска состоит из смеси полимеров, пигментов и добавок. При нагревании в специальной печи порошковая краска тает и прочно сцепляется с поверхностью, образуя равномерное и долговечное покрытие.
                </div>
                <div className={classes.paragsCont} ref={block8}>
                    Этот метод имеет несколько преимуществ. Во-первых, порошковая покраска обеспечивает высокую стойкость к царапинам, химическим воздействиям, ультрафиолетовому излучению и атмосферным условиям. Во-вторых, она экологически безопасна, поскольку не содержит растворителей и других вредных веществ. Кроме того, порошковая покраска позволяет создавать разнообразные оттенки и эффекты, такие как металлическое покрытие, матовая отделка и другие.
                </div>
                <div className={classes.secondContainer} ref={block9}>
                    <img src={secCont1Img} />
                    <img src={secCont2Img}/>
                    <img src={secCont3Img} className={classes.bottomImg}/>
                    <img src={alterSecCont3Img} className={classes.alterBottomImg}/>
                </div>
                <div className={classes.sevenStages} ref={block10}>
                    <div className={classes.titleWhite}>Заказ делится всего на </div>
                    <div className={classes.titleYellow}>7 этапов</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.fifthBlock1} ref={block11}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>1</div>
                                <div className={classes.title}>
                                    <div>
                                        Обсуждение требований 
                                    </div>
                                    <div>
                                        и деталей проекта
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Вы можете связаться с нами через наш сайт или по телефону, чтобы оставить заявку на изготовление мебели. Мы примем вашу заявку и свяжемся с вами в ближайшее время.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont1Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2} ref={block12}>
                        <div className={classes.imgSide}><img src={fifthCont2Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>2</div>
                                <div className={classes.title}>
                                    <div>
                                        Подготовка 
                                    </div>
                                    <div>
                                        документации
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После обсуждения требований, составляется техническое задание или чертежи, которые описывают детали и параметры металлоконструкции, а также спецификации сварки. Эта документация будет использоваться в процессе выполнения заказа.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont2Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1} ref={block13}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>3</div>
                                <div className={classes.title}>
                                    <div>
                                        Расчет 
                                    </div>
                                    <div>
                                        стоимости
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                На основе предоставленных требований и чертежей, мы производим расчет стоимости выполнения заказа. Сюда входят затраты на материалы, труд и оборудование, а также сроки выполнения работы.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont4Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2} ref={block14}>
                        <div className={classes.imgSide}><img src={fifthCont3Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>4</div>
                                <div className={classes.title}>
                                    <div>
                                        Согласование условий и 
                                    </div>
                                    <div>
                                        подписание договора
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После того как клиент оценит предложение и уточнит детали, происходит согласование условий и подписание договора на выполнение сварочных работ.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont3Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1} ref={block15}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>5</div>
                                <div className={classes.title}>
                                    <div>
                                        Изготовление 
                                    </div>
                                    <div>
                                        металлоконструкции
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После заключения договора начинается процесс изготовления металлоконструкции согласно утвержденным чертежам и спецификациям. В этот период может потребоваться закупка материалов.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont5Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2} ref={block16}>
                        <div className={classes.imgSide}><img src={fifthCont6Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>6</div>
                                <div className={classes.title}>
                                    <div>
                                        Сварка и 
                                    </div>
                                    <div>
                                        контроль качества
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Сварочные работы проводятся профессиональными сварщиками, соблюдая все технические стандарты и требования безопасности. После завершения сварочных работ проводится контроль качества для убедительности, что металлоконструкция соответствует утвержденным спецификациям.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont6Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1} ref={block17}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>7</div>
                                <div className={classes.title}>
                                    <div>
                                        Оплата и 
                                    </div>
                                    <div>
                                        документация
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После успешной приемки заказа, клиент осуществляет оплату согласно условиям договора. Также предоставляются все необходимые документы, включая акты выполненных работ и гарантии, если они предусмотрены.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont7Img} /></div>
                    </div>
                </div>
                <FormAudit />
            </div>
        );
}

export default Painting;