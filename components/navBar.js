import styles from '../styles/layout/navBar.module.scss'

const NavBar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <ul className={styles.conatiner__list}>
                    <li className={styles.conatiner__list__item}>Accueil</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar