import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/Group 4606.png"
import phoneImg from "../../assets/images/Vector.svg"
import BisnesMenu from "../BisnesMenu/BisnesMenu"
import ServiceMenu from "../ServiceMenu/ServiceMenu"
import numbNavImg from "../../assets/images/NumbNavImg.svg"
import { AboutUsMenu } from "../AboutUsMenu/AboutUsMenu";

const Header = () => {
    return (
        <header
            className={
            classes.header
        }>
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    <NavLink to={"/home"}>
                        <img className={classes.logo} src={logo}/>
                    </NavLink>
                </div>
                <div className={classes.navContainer}>
                    <div className={classes.home}>
                        <NavLink to={"/home"} className={navData => navData.isActive ? classes.active : classes.disabled}>
                            Главная
                        </NavLink>
                    </div>
                    <div className={classes.home}>
                        <NavLink to={"/catalog"} className={navData => navData.isActive ? classes.active : classes.disabled}>
                            Каталог
                        </NavLink>
                    </div>
                    <div className={classes.bisnesMenu}>
                        <BisnesMenu />
                    </div>
                    <div className={classes.serviceMenu}>
                        <ServiceMenu />
                    </div>
                    <div className={classes.home}>
                        <NavLink to="/for_home" className={navData => navData.isActive ? classes.active : classes.disabled}>
                            Для дома
                        </NavLink>
                    </div>
                    <div className={classes.aboutUsMenu}>
                        <AboutUsMenu />
                    </div>
                </div>
                <div className={classes.phoneBlock}>
                    <img src={phoneImg}/>
                    <a href="tel:+79600535559">+7 (960) 053 55 59</a>
                </div>
                <div className={classes.numbNavBlock}>
                    <NavLink to="/navigate">
                        <img src={numbNavImg} />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
