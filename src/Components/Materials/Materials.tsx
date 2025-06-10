import React, { useRef } from "react";
import classes from "./Materials.module.css";
import shicDisImg from "../../assets/images-webp/Vector.webp"
import shicDis from "../../assets/images/Шикарный дизайн.svg"
import shicDisText from "../../assets/images/shicDisText.svg"
import woodImg from "../../assets/images-webp/Group.webp"
import onlyBestMat from "../../assets/images/Только лучшие материалы.svg"
import woodText from "../../assets/images/woodText.svg"
import smileImg from "../../assets/images-webp/Group 4603.webp"
import bestPrices from "../../assets/images/Приятные цены.svg"
import bestPricesText from "../../assets/images/bestPricesText.svg"
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
// const {classes} = require("./Header.module.css");

const Materials = () => {
    const block1 = useRef(null)

    const observedElements = [
        block1
    ];
    
    useIntersectionObserver(observedElements, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    return (
        <div
            className={
                classes.Materials
            }
            ref={block1}
        >
            <div className={classes.infoBlock}>
                <div className={classes.infBlImg}><img src={shicDisImg} /></div>
                <div className={classes.infBlTitle}>Шикарный дизайн</div>
                <div className={classes.infBlText}>
                    Когда вы видите красивую мебель, которая привлекает внимание, вы чувствуете себя счастливым и расслабленным. Именно такие ощущения вы испытываете, когда смотрите на дизайн мебели Soft Loft.
                </div>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.infBlImg}><img src={woodImg} /></div>
                <div className={classes.infBlTitle}>Только лучшие материалы</div>
                <div className={classes.infBlText}>
                    Мы уделяем большое внимание материалам для нашей мебели. Мы используем только высококачественные материалы, которые обеспечивают долговечность и надежность нашей продукции.
                </div>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.infBlImg}><img src={smileImg} /></div>
                <div className={classes.infBlTitle}>Приятные цены</div>
                <div className={classes.infBlText}>
                    Мы стремимся сделать нашу мебель доступной для всех, поэтому постоянно работаем над оптимизацией производства и затраты, чтобы предложить нашим клиентам лучшее качество по приятной цене.
                </div>
            </div>
        </div>
    )
}

export default Materials;
