import Header from '../components/header'
import NavBar from '../components/navBar'
import Sidebar from '../components/sideBar'
import styles from '../styles/pages/Home.module.scss'


const Layout = ({ children }) => {
    return (

        <div className={styles.container}>
            <div className={styles.container__header}>
                <Header />
            </div>
            <div className={styles.container__main}>
                <NavBar />
                <main className={styles.container__feed}>{children}</main>
                <Sidebar />
            </div>
        </div>

    )
}

export default Layout