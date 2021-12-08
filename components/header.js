import Image from 'next/image'
import logo from '../public/img/logo.png'
import styles from '../styles/layout/header.module.scss'
import modal from '../styles/components/modal.module.scss'

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.header__logo}>
                    <Image
                        className={styles.header__logo__img}
                        src={logo}
                        alt="logo - breakshield"
                        width={30}
                        height={40}
                    />
                    <p className={styles.header__logo__title}>Breakshield</p>

                </div>
                <div className={styles.header__right__col}>
                    <button className={`${styles.btn} && ${styles.btn__borderline}`}>Se connecter</button>
                    <button className={`${styles.btn} && ${styles.btn__white}`}>S'inscrire</button>
                </div>
            </div>
            {/* <modal className={modal.container}>
                <div className={modal.container__form}>
                    Hello modal connect
                </div>
            </modal> */}
        </header>

    )
}

export default Header