import React from 'react';
import deer from "../../images/ol.webp";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_content}>
                <img src={deer} alt=""/>
            </div>
        </header>
    );
};

export default Header;