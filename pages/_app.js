import '../styles/base/globals.css'
import '../styles/base/typography.scss'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>


  )
}

export default MyApp
