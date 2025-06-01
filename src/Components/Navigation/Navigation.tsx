import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div
            className={
            classes.navigation
        }>
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
                <div className={classes.home}>
                    <NavLink to="/business/offices" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Офисы
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/business/salons" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Салоны
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/business/shops" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Магазины
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/business/bars_cafes" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Бары и Кафе
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/business/restaurants" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Рестораны
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/for_home" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Для дома
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/service/welding" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Сварка металл. изделий
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/service/sawing" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Распил ЛДСП, МДФ, ДСП
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/service/painting" className={navData => navData.isActive ? classes.active : classes.disabled}>
                        Порошковая покраска
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/how_it_will_be"
                        className={navData => navData.isActive ? classes.active : classes.disabled}>
                            Как всё будет
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/about_us" className={navData => navData.isActive ? classes.active : classes.disabled}>
                            О нас
                    </NavLink>
                </div>
                <div className={classes.home}>
                    <NavLink to="/reviews" className={({ isActive }) => isActive ? classes.active : classes.disabled}>
                            Отзывы
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
