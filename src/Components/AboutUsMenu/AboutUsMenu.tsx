import React, { useState, useRef, useEffect} from "react";
import classes from "./AboutUsMenu.module.css";
import {NavLink} from "react-router-dom";
import dropdownImg from "../../assets/images-webp/DropdownImg.webp";
import dropdownImg2 from "../../assets/images-webp/DropdownImg2.webp";


export const AboutUsMenu = () => {
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
            О нас
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
                        О нас
                        <img src={dropdownImg2}/>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/how_it_will_be" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            Как все будет
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/reviews" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            Отзывы
                        </NavLink>
                    </li>
                    <li className={classes.menuItem}>
                        <NavLink to="/about_us" className={(navData) => (navData.isActive ? classes.navActive : classes.navDisabled)}>
                            О нас
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

