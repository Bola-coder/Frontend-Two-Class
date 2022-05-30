import React from "react"
import officeImage from './images/office-image.png';
import  style from './css/banner.module.css'

const Banner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner__text}>
                <h1>Banner Section</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta consequatur, repellat labore ut sed doloremque quaerat doloribus numquam fugiat ducimus nesciunt iusto, recusandae blanditiis nihil laborum ipsa! Maxime, unde?</p>
                <button>
                    Click me
                </button>
            </div>
            <div className={style.banner__image}>
                <img src={officeImage} alt="office img" />
            </div>
        </section>
    )
};

export default Banner;