import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <ul className={s.nav}>
            <li><a>Home</a></li>
            <li><a>Messages</a></li>
            <li><a>News</a></li>
            <li><a>Music</a></li>
            <li><a>Setting</a></li>
        </ul>
    );
};

export default Navbar;