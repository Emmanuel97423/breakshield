import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/buttons'
import style from '../styles/layout/feed.module.scss'
import styled from 'styled-components'

const Slide = styled.div`
 
    
    border-radius:5px;
    background-image: linear-gradient( rgba(100,100,100,.4), rgba(0,0,0,0.9)), url("/img/slides/home-bg-slide.jpg");
    background-size: cover;
    background-position: center;
    
  
`


const Home = () => {
  return (

    <div>
      <div className={style.container}>
        <div className={style.container__title}>
          <h1>Bienvenue sur Breakshield</h1>
        </div>
        <Slide className={style.container__slide}>
          <h2>Concours et apprends depuis<br /> chez toi!</h2>
          <p>rejoins breakshield maintenant, augmente ton expériance de jeu!</p>
          <Button color="white" label="Rejoindre" />
        </Slide>
      </div>
    </div>

  )
}
export default Home