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
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;