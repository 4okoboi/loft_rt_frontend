import React, { useState, useRef, useEffect} from "react";
import classes from "./ServiceMenu.module.css";
import {NavLink} from "react-router-dom";
import dropdownImg from "../../assets/images-webp/DropdownImg.webp";
import dropdownImg2 from "../../assets/images-webp/DropdownImg2.webp";


const ServiceMenu = () => {
    const useClickOutside = (ref, callback) => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        useEffect(() => {
            document.addEventListener("mousedown", handleClick);
            return () => {
                document.removeEventListener("mousedown", handleClick);
            };
        });
    };

    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    return(
        <div className={classes.header}>
            <button
                className={classes.menuButton}
                onMouseEnter={() => setOpen(true)}
            >
            Услуги
            <img src={dropdownImg} />
            </button>
            <nav 
                className={`${classes.menu} ${isOpen ? classes.active : ""}`} 
                ref={menuRef}
                onMouseLeave={(e) => {
                    if (!menuRef.current.contains(e.relatedTarget)) {
                        setOpen(false);
                    }
                }}
            >
                <ul className={classes.menuList}>
                    <li className={classes.menuTitle}>
                        Услуги
                        <img src={dropdownImg2}/>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/service/sawing" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            Распил ЛДСП, МДФ, ДСП
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/service/welding" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            Сварка металлических изделий
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/service/painting" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            Порошковая покраска
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ServiceMenu;