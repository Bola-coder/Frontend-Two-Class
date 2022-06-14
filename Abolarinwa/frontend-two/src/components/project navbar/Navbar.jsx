import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./css/navbar.module.css";
import { FaHamburger, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };
  return (
    <nav className={style.nav}>
      <div  iv className={style.logo}>
        <Link to="/">
        <h1>Navify</h1>
        </Link>
      </div>
      <div className={mobile ? style.mobile_links : style.links}>
        <div className={style.hamburger} onClick={handleMobile}>
          {mobile ? <FaTimes /> : <FaHamburger />}
        </div>
        <div className={mobile ? style.mobile_link : style.link}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/random">Random</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const myName = () => {};
