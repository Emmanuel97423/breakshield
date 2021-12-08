import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'
import Header from '../components/header'
import NavBar from '../components/navBar'

const Home = () => {
  return (

    <div className={styles.container}>
      <div className={styles.container__header}>
        <Header />
      </div>
      <div className={styles.container__main}>
        <NavBar />
        <h1>Feed</h1>
        <div>right sidebar</div>

      </div>




    </div>

  )
}
export default Home