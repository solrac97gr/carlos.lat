import '../styles/globals.css'
import '../styles/prism-holi-theme.css'
import {Layout} from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp
