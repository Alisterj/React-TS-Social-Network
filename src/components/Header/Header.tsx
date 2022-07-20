import React from 'react';
import deer from "../../images/ol.webp";
import s from './Header.module.css'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className={s.header_wrapper}>
            <div className={s.header}>
                <div className={s.header_logo}>
                    <img src={deer} alt=""/>
                </div>
                <div className={s.header_menu}>
                    <ul className={s.menu}>
                        <li><a href={'#'} className={s.active}>Home</a></li>
                        <li><a href={'#'}>Messages</a></li>
                        <li><a href={'#'}>News</a></li>
                        <li><a href={'#'}>Music</a></li>
                        <li><a href={'#'}>Setting</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;