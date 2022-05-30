import React from "react";
import style from './css/navbar.module.css'


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <h1>Navify</h1>
            </div>
            <div className={style.links}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#serv">Services</a>
                <a href="#cont">Contact us</a>

            </div>
        </nav>
    )
};

export default Navbar;