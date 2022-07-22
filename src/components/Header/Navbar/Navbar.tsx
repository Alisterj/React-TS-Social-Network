import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.header_menu}>
            <ul className={s.menu}>
                <li><NavLink to={'/home'}
                             className={({isActive}) => isActive ? s.active : ''}>Home</NavLink></li>
                <li><NavLink to={'/dialog'}
                             className={({isActive}) => isActive ? s.active : ''}>Messages</NavLink></li>
                <li><NavLink to={'/news'}
                             className={({isActive}) => isActive ? s.active : ''}>News</NavLink></li>
                <li><NavLink to={'/music'}
                             className={({isActive}) => isActive ? s.active : ''}>Music</NavLink></li>
                <li><NavLink to={'/setting'}
                             className={({isActive}) => isActive ? s.active : ''}>Setting</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;