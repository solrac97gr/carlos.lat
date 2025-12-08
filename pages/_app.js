import '../styles/globals.css'
import '../styles/night-owl.css'
import {Layout} from '../components/layout'
import { useEffect } from "react";
import { initGA, logEvent } from '../lib/analytics';
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

export function reportWebVitals(metric) {
  // Log Core Web Vitals to Google Analytics
  logEvent('Web Vitals', metric.name, metric.label, Math.round(metric.value));
}

export default MyApp
