import styles from '../styles/layout/navBar.module.scss'
import { FaHouseDamage } from 'react-icons/fa';
import Image from 'next/image'
//icons
import wzIcon from '../public/img/icons/icon-wz-white.ico'

const NavBar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <ul className={styles.container__list}>
                    <li className={styles.container__list__item}><div><FaHouseDamage /><h3>Accueil</h3></div></li>
                    <li className={styles.container__list__item}>

                        <div>
                            <Image
                                src={wzIcon}
                                alt="icon - warzone"
                                width={25}
                                height={19}
                            >

                            </Image>

                            <h3>Warzone</h3>
                        </div>


                        <ul className={styles.container__subList__container}>
                            <li className={styles.container__subList__item}>Aperçu</li>
                            <li className={styles.container__subList__item}>Battles</li>
                            <li className={styles.container__subList__item}>Ladder</li>
                            <li className={styles.container__subList__item}>Classement</li>
                        </ul>

                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar