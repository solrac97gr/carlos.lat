import '../styles/globals.css'
import '../styles/night-owl.css'
import {Layout} from '../components/layout'
import { useEffect } from "react";
import { initGA } from '../lib/analytics';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initGA()
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp
