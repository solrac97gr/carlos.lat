import '../styles/globals.css'
import '../styles/night-owl.css'
import {Layout} from '../components/layout'
import { useEffect } from "react";
import { initGA } from '../lib/analytics';
import { LanguageProvider } from '../lib/LanguageContext';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initGA()
  }, []);

  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  
  )
}

export default MyApp
