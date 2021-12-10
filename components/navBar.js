import styles from '../styles/layout/navBar.module.scss';
import { FaHouseDamage } from 'react-icons/fa';
import Image from 'next/image';
import wzIcon from '../public/img/icons/icon-wz-white.ico';
import Dropdown from './dropdown';
import React, { useState } from 'react'


const warzoneProps = {
    item1: "Aperçu",
    item2: "Battles",
    item3: "Ladders",
    item4: "Classement"
}
const NavBar = () => {

    const [display, setDisplay] = useState("none")

    const handleClick = () => {

        if (display === "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }


    return (
        <nav>
            <div className={styles.container}>
                <ul className={styles.container__list}>
                    <li className={styles.container__list__item}><div><FaHouseDamage /><h3>Accueil</h3></div></li>
                    <li className={styles.container__list__item}>
                        <div onClick={() => handleClick()}>
                            <Image
                                src={wzIcon}
                                alt="icon - warzone"
                                width={25}
                                height={19}
                            >
                            </Image>
                            <h3>Warzone</h3>
                        </div>
                        <div style={{ display: display }}>
                            <Dropdown  {...warzoneProps} />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar