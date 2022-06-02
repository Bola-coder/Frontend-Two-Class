import React, { useState } from "react";
import style from "./css/navbar.module.css";
import { FaHamburger, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <h1>Navify</h1>
      </div>
      <div className={mobile ? style.mobile_links : style.links}>
        <div className={style.hamburger} onClick={handleMobile}>
          {mobile ? <FaTimes /> : <FaHamburger />}
        </div>
        <div
          className={mobile ? style.mobile_link : style.link}
          onClick={handleMobile}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#serv">Services</a>
          <a href="#cont">Contact us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const myName = () => {
  
}
