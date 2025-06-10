import React, { useRef } from "react";
import classes from "./Welding.module.css";

import logoForFon from "../../assets/images-webp/welding/logoForFon.webp"

import secCont1Img from "../../assets/images-webp/welding/secCont1Img.webp"
import secCont2Img from "../../assets/images-webp/welding/secCont2Img.webp"
import secCont3Img from "../../assets/images-webp/welding/secCont3Img.webp"
import alterSecCont3Img from "../../assets/images-webp/welding/alterSecCont3Img.webp"

import advantageImg from "../../assets/images-webp/welding/advantageImg.webp"

import fifthCont1Img from "../../assets/images-webp/welding/fifthCont1Img.webp"
import fifthCont2Img from "../../assets/images-webp/welding/fifthCont2Img.webp"
import fifthCont3Img from "../../assets/images-webp/welding/fifthCont3Img.webp"
import fifthCont4Img from "../../assets/images-webp/welding/fifthCont4Img.webp"
import fifthCont5Img from "../../assets/images-webp/welding/fifthCont5Img.webp"
import fifthCont6Img from "../../assets/images-webp/welding/fifthCont6Img.webp"
import fifthCont7Img from "../../assets/images-webp/welding/fifthCont7Img.webp"

import FormAudit from "../FormAudit/FormAudit";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Welding: React.FC = (props) => {
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
    const block18 = useRef(null)
    const block19 = useRef(null)
    const block20 = useRef(null)
    const block21 = useRef(null)
    const block22 = useRef(null)
    const block23 = useRef(null)
    const block24 = useRef(null)
    const block25 = useRef(null)
    const block26 = useRef(null)
    const block27 = useRef(null)
    const block28 = useRef(null)
    const block29 = useRef(null)
    const block30 = useRef(null)
    const block31 = useRef(null)
    const observedElements = [
        block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, 
        block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, 
        block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, 
        block31
    ];

    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    
    return (
        <div className={classes.welding}>
            <div className={classes.firstContainer} ref={block1}>
                <div className={classes.logoText}>
                    <div className={classes.sawingTitleYellow}>
                        СВАРКА
                    </div>
                    <div className={classes.titleWhite}>
                        МЕТАЛЛИЧЕСКИХ ИЗДЕЛИЙ
                    </div>
                </div>
                <div className={classes.fonImg}>
                    <div className={classes.homePageKitchenNav}>
                        <img src={logoForFon} />
                    </div>
                </div>
            </div>
            <div className={classes.whatIsWeld} ref={block2}>
                <div className={classes.firstTitle}>
                    <div className={classes.titleWhite}>Что такое </div>
                    <div className={classes.titleYellow}>сварка </div>
                    <div className={classes.titleWhite}>и для чего она нужна? </div>
                </div>
                <div className={classes.paragsCont}>
                    Сварка металлоконструкций - это процесс соединения металлических деталей и элементов для создания металлических конструкций, таких как мосты, здания, машины, металлические рамы, трубопроводы и многие другие. Этот процесс обеспечивает прочное и устойчивое соединение между металлическими элементами и играет ключевую роль во многих инженерных и строительных проектах.
                </div>
                <div className={classes.secondContainer}>
                    <img src={secCont1Img} />
                    <img src={secCont2Img}/>
                    <img src={secCont3Img} className={classes.bottomImg}/>
                    <img src={alterSecCont3Img} className={classes.alterBottomImg}/>
                </div>
            </div>
            <div className={classes.aboutFurn} ref={block3}>
                <div className={classes.titleYellow}>5 преимуществ </div>
                <div className={classes.titleWhite}>нашей сварки</div>
            </div>
            <div className={classes.thirdContainer}>
                <div className={classes.thirdBlock} ref={block4}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.title}>
                            <div>Методы сварки</div>
                        </div>
                        <div className={classes.number}>1</div>
                    </div>
                    <div className={classes.paragraph}>
                        Сварка металлоконструкций может выполняться различными методами, включая дуговую сварку, газовую сварку, электронно-лучевую сварку и другие. Выбор метода зависит от материала, толщины металла, требований к прочности и других факторов.
                    </div>
                </div>
                <div className={classes.thirdBlock} ref={block5}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.title}>
                            <div>Подготовка поверхности</div>
                        </div>
                        <div className={classes.number}>2</div>
                    </div>
                    <div className={classes.paragraph}>
                        Перед сваркой важно правильно подготовить поверхность металла. Это включает в себя удаление окислов, ржавчины, жира и других загрязнений, чтобы обеспечить хороший контакт между деталями и обеспечить качественное соединение.
                    </div>
                </div>
                <div className={classes.thirdBlock} ref={block6}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.title}>
                            <div>Сварочные параметры</div>
                        </div>
                        <div className={classes.number}>3</div>
                    </div>
                    <div className={classes.paragraph}>
                        Определение правильных параметров сварки, таких как ток, напряжение, скорость сварки и выбор сварочного материала, чтобы обеспечить нужные характеристики соединения.
                    </div>
                </div>
                <div className={classes.thirdBlock} ref={block7}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.title}>
                            <div>Контроль качества</div>
                        </div>
                        <div className={classes.number}>4</div>
                    </div>
                    <div className={classes.paragraph}>
                        После завершения сварочных работ проводится контроль качества, включая визуальный осмотр, измерение размеров и выполнение различных тестов (например, неразрушающего контроля), чтобы убедиться в прочности и надежности соединения.
                    </div>
                </div>
                <div className={classes.thirdBlock} ref={block8}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.title}>
                            <div>Безопасность</div>
                        </div>
                        <div className={classes.number}>5</div>
                    </div>
                    <div className={classes.paragraph}>
                        Сварка металлоконструкций требует строгого соблюдения правил безопасности, включая использование защитной экипировки, контроль опасных газов и дыма, а также обеспечение безопасных условий для сварочных работников.
                    </div>
                </div>
                <div className={classes.thirdBlockImg} ref={block9}>
                    <img src={advantageImg} />
                </div>
            </div>
            <div className={classes.migWelding} ref={block10}>
                <div className={classes.title1}>
                    <div className={classes.titleWhite}>Чем мы варим и почему?</div>
                </div>
                <div className={classes.titleYellow}>Миг-сварка</div>
                <div className={classes.titleWhite}>- это один из наиболее популярных и широко</div>
                <div className={classes.titleWhite}>используемых методов дуговой сварки и вот почему:</div>
            </div>
            <div className={classes.fourthContainer}>
                <div className={classes.fourthBlock1} ref={block11}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>1</div>
                        <div className={classes.title}>
                            <div>
                                Миг-сварка обеспечивает высокую скорость и производительность. Это позволяет быстро и эффективно
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        выполнять сварочные работы, особенно на производственных предприятиях. Высокая скорость сварки также означает, что меньше времени затрачивается на каждое соединение, что может быть важно при выполнении больших объемов работ.
                    </div>
                </div>
                <div className={classes.fourthBlock2} ref={block12}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>2</div>
                        <div className={classes.title}>
                            <div>
                                Миг-сварка характеризуется минимальным количеством брызг и бесшумностью во время работы.
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        Это может быть важно в ситуациях, где шум и брызги могут быть проблемой. Например, при сварке вблизи жилых зон или в ограниченных пространствах.
                    </div>
                </div>
                <div className={classes.fourthBlock1} ref={block13}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>3</div>
                        <div className={classes.title}>
                            <div>
                                Миг-сварка обеспечивает высокое качество сварного соединения. Этот метод позволяет
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        создавать прочные и надежные сварные соединения, которые часто соответствуют стандартам и требованиям качества.
                    </div>
                </div>
                <div className={classes.fourthBlock2} ref={block14}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>4</div>
                        <div className={classes.title}>
                            <div>
                                Миг-сварка часто считается более экономичным методом сварки по сравнению с другими методами. 
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        Он требует меньше расходных материалов, таких как электроды, и обычно имеет более низкую стоимость оборудования.
                    </div>
                </div>
            </div>
            <div className={classes.tigWelding} ref={block15}>
                <div className={classes.titleYellow}>TIG</div>
                <div className={classes.titleWhite}>означает "Tungsten Inert Gas", что переводится как "Вольфрамовая инертная </div>
                <div className={classes.titleWhite}>газовая сварка". Этот вид сварки также называют "Tungsten Arc Welding" (TAW).</div>
                <div className={classes.titleYellow}>Преимущества TIG-сварки (GTAW):</div>
            </div>
            <div className={classes.fourthContainer}>
                <div className={classes.fourthBlock1} ref={block16}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>1</div>
                        <div className={classes.title}>
                            <div>
                                Высокое качество шва: TIG-сварка создает очень чистые и точные сварочные швы без брызг металла, что делает ее 
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        идеальным выбором для работ, требующих высокой эстетики и точности.
                    </div>
                </div>
                <div className={classes.fourthBlock2} ref={block17}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>2</div>
                        <div className={classes.title}>
                            <div>
                                Использование различных материалов: TIG-сварка подходит для сварки разнообразных материалов, таких 
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        как нержавеющая сталь, алюминий, титан, медь и другие, что делает ее универсальным методом сварки.
                    </div>
                </div>
                <div className={classes.fourthBlock1} ref={block18}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>3</div>
                        <div className={classes.title}>
                            <div>
                                Нет брызг: В процессе TIG-сварки плавленый металл не брызгается, что уменьшает
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        риск  возгорания и облегчает чистку после сварки.
                    </div>
                </div>
                <div className={classes.fourthBlock2} ref={block19}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>4</div>
                        <div className={classes.title}>
                            <div>
                                Отсутствие вредных выбросов: Использование инертного газа (например, аргон) для защиты от
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        окисления делает TIG-сварку экологически чистой и безопасной для сварщика.
                    </div>
                </div>
                <div className={classes.fourthBlock1} ref={block20}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>5</div>
                        <div className={classes.title}>
                            <div>
                                Контроль над теплом: Сварщик может более точно контролировать
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        температуру и скорость сварки, что позволяет избегать деформаций и напряжений в металле.
                    </div>
                </div>
                <div className={classes.fourthBlock2} ref={block21}>
                    <div className={classes.numbAndTitl}>
                        <div className={classes.number}>6</div>
                        <div className={classes.title}>
                            <div>
                                Отсутствие шлака: TIG-сварка не производит шлака, который нужно удалять после сварки, 
                            </div>
                        </div>
                    </div>
                    <div className={classes.paragraph}>
                        в отличие от некоторых других методов сварки.
                    </div>
                </div>
            </div>
            <div className={classes.argWelding} ref={block22}>
                <div className={classes.titleYellow}>Сварка аргоном</div>
                <div className={classes.titleWhite}> — это метод сварки, при котором в качестве защитного газа </div>
                <div className={classes.titleWhite}>используется аргон. Аргон предотвращает окисление и образование дефектов в металле при сварке, создавая инертную атмосферу вокруг металлической детали. Этот метод широко используется в металлообрабатывающей промышленности для сварки стали, нержавеющей стали, алюминия и других металлов.</div>
            </div>
            <div className={classes.sevenStages} ref={block23}>
                <div className={classes.titleWhite}>Заказ делится всего на </div>
                <div className={classes.titleYellow}>7 этапов</div>
            </div>
            <div className={classes.fifthContainer}>
                <div className={classes.fifthBlock1} ref={block24}>
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
                <div className={classes.fifthBlock2} ref={block25}>
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
                <div className={classes.fifthBlock1} ref={block26}>
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
                    <div className={classes.imgSide}><img src={fifthCont3Img} /></div>
                </div>
                <div className={classes.fifthBlock2} ref={block27}>
                    <div className={classes.imgSide}><img src={fifthCont4Img} /></div>
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
                    <div className={classes.alerImgSide}><img src={fifthCont4Img} /></div>
                </div>
                <div className={classes.fifthBlock1} ref={block28}>
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
                <div className={classes.fifthBlock2} ref={block29}>
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
                <div className={classes.fifthBlock1} ref={block30}>
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
            <div className={classes.everyWelding} ref={block31}>
                <div className={classes.titleWhite}>
                    Каждый заказ по сварке металлоконструкций уникален и может включать в себя различные этапы и дополнительные услуги в зависимости от конкретных требований клиента и характера проекта.
                </div>
            </div>
            <FormAudit />
        </div>
    );
}

export default Welding;