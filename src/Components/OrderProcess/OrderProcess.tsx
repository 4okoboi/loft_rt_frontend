import React, { useEffect, useRef } from "react"
import classes from "./OrderProcess.module.css"
import orderProcessTitlImg from "../../assets/images-webp/order_process/orderProcessTitlImg.webp"
import crookedLine from "../../assets/images/order_process/crookedLine.svg"
import seeBelow from "../../assets/images/order_process/seeBelow.svg"

import thirdCont1Img from "../../assets/images-webp/order_process/thirdCont1Img.webp"
import thirdCont2Img from "../../assets/images-webp/order_process/thirdCont2Img.webp"
import thirdCont3Img from "../../assets/images-webp/order_process/thirdCont3Img.webp"
import thirdCont4Img from "../../assets/images-webp/order_process/thirdCont4Img.webp"
import thirdCont5Img from "../../assets/images-webp/order_process/thirdCont5Img.webp"

import logo from "../../assets/images/order_process/Group 4697.svg"
import seeGuar from "../../assets/images/order_process/seeGuar.svg"
import crookedLine2 from "../../assets/images/order_process/crookedLine2.svg"
import FormAudit from "../FormAudit/FormAudit"
import { NavLink } from "react-router-dom"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"


const OrderProcess = () =>{
    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    // const block4 = useRef(null)
    const block5 = useRef(null)
    const block6 = useRef(null)
    const block7 = useRef(null)
    const block8 = useRef(null)
    const block9 = useRef(null)
    const block10 = useRef(null)
    const block11 = useRef(null)
    const observedElements = [
        block1, block2, block3, 
        // block4, 
        block5, block6, block7, block8, block9, block10, block11
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    
    return(
        <div className={classes.orderProcess}>
            <div className={classes.firstBlock} ref={block1}>
                <div className={classes.vertical30}></div>
                <div className={classes.text}>
                    <div className={classes.titleWhite}>ПРОЦЕСС ЗАКАЗА</div>
                    <div className={classes.titleYellow}>LOFT & LUXE</div>
                </div>
                <div className={classes.vertical30}></div>
                <div>
                    <div className={classes.firstBlockImg}><img src={orderProcessTitlImg} /></div>
                </div>
            </div>
            <div className={classes.secondContainer} ref={block2}>
                <div className={classes.vertical28}></div>
                <div className={classes.text1}>Не уверены, как будет проходить заказ?</div>
                <div className={classes.text1_1}>Не уверены, как будет</div>
                <div className={classes.text1_2}>проходить заказ?</div>
                <div className={classes.crookedLine}><img src={crookedLine} /></div>
                <div className={classes.text2}>Сейчас мы все подробно</div>
                <div className={classes.text3}>
                    <div className={classes.titleYellow}>
                        расскажем
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        и
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        покажем
                    </div>
                </div>
                <div className={classes.vertical38}></div>
            </div>
            <div className={classes.seeBelow} ref={block3}><img src={seeBelow} /></div>
            <div className={classes.thirdConteiner}>
                <div className={classes.title} ref={block5}>
                    <div className={classes.titleWhite}>Заказ делится</div>
                    <div className={classes.titleWhite}>всего</div>
                    <div className={classes.titleWhite}>на</div>
                    <div className={classes.titleYellow}>5 этапов</div>
                </div>
                <div className={classes.ordBlock} ref={block6}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>1</div>
                            <div className={classes.title}>
                                <div>Оставьте заявку на сайте</div>
                                <div>или по телефону</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Вы можете связаться с нами через наш сайт или
                            по телефону, чтобы оставить заявку на
                            изготовление мебели. Мы примем вашу заявку и
                            свяжемся с вами в ближайшее время.
                        </div>
                    </div>
                    <div><img src={thirdCont1Img} /></div>
                </div>
                <div className={classes.ordBlock} ref={block7}>
                    <div className={classes.thirdContImg}><img src={thirdCont2Img} /></div>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>2</div>
                            <div className={classes.title}>
                                <div>С вами связывается</div>
                                <div>наш спациалист</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Как только мы получим вашу заявку, наш специалист
                            свяжется с вами для уточнения деталей заказа и ответа
                            на все ваши вопросы. Мы готовы помочь вам с выбором
                            материалов, дизайном и другими важными аспектами.
                        </div>
                    </div>
                    <div className={classes.alterThirdContImg}><img src={thirdCont2Img} /></div>
                </div>
                <div className={classes.ordBlock} ref={block8}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>3</div>
                            <div className={classes.title}>
                                <div>Проектирование мебели</div>
                                <div>по техническому заданию</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Наши опытные дизайнеры разработают проект мебели,
                            который отвечает всем вашим требованиям и
                            пожеланиям. Мы обсудим с вами каждую деталь, чтобы
                            убедиться, что вы получите именно то, что хотели.
                        </div>
                    </div>
                    <div><img src={thirdCont3Img} /></div>
                </div>
                <div className={classes.ordBlock} ref={block9}>
                    <div className={classes.thirdContImg}><img src={thirdCont4Img} /></div>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>4</div>
                            <div className={classes.title}>
                                <div>Мы производим</div>
                                <div>мебель вашей мечты</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Мы производим мебель вашей мечты - После того, как
                            проект утвержден, мы начинаем производство мебели.
                            Мы используем только высококачественные материалы и
                            современное оборудование, чтобы создать мебель,
                            которая будет служить вам долгие годы.
                        </div>
                    </div>
                    <div className={classes.alterThirdContImg}><img src={thirdCont4Img} /></div>
                </div>
                <div className={classes.ordBlock} ref={block10}>
                    <div className={classes.text}>
                        <div className={classes.numbAndTitl}>
                            <div className={classes.number}>5</div>
                            <div className={classes.title}>
                                <div>Наши специалисты монтируют</div>
                                <div>готовую мебель у вас</div>
                            </div>
                        </div>
                        <div className={classes.paragraph}>
                            Когда мебель готова, наша команда специалистов
                            доставит ее к вам и установит на месте. Мы убедимся,
                            что все детали установлены правильно и мебель
                            выглядит и работает идеально. Вы получите готовую
                            мебель, которая превзойдет все ваши ожидания.
                        </div>
                    </div>
                    <div><img src={thirdCont5Img} /></div>
                </div>
            </div>
            <div className={classes.fonImg} ref={block11}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересуют гарантии на нашу продукцию?</div>
                <img src={crookedLine2} className={classes.curvedLineImg}/>
                <div className={classes.learnDetailed}>
                    <NavLink to={""} className={classes.learnDetailedNav}>
                        Посмотреть наши гарании
                    </NavLink>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default OrderProcess;