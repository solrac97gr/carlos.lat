import '../styles/globals.css'
import '../styles/night-owl.css'
import {Layout} from '../components/layout'
import { useEffect } from "react";
import { initGA, logEvent } from '../lib/analytics';
import { LanguageProvider } from '../lib/LanguageContext';
import ErrorBoundary from '../components/ErrorBoundary';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLandingPage = router.pathname === '/ai-tooling' || router.pathname === '/en/ai-tooling';

  useEffect(() => {
    initGA()
  }, []);

  return (
    <ErrorBoundary fallbackMessage="We're experiencing technical difficulties. Please refresh the page or try again later.">
      <LanguageProvider>
        {isLandingPage ? (
          <ErrorBoundary fallbackMessage="This page content failed to load. Please try refreshing.">
            <Component {...pageProps} />
          </ErrorBoundary>
        ) : (
          <Layout>
            <ErrorBoundary fallbackMessage="This page content failed to load. Please try refreshing.">
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        )}
      </LanguageProvider>
    </ErrorBoundary>

  )
}

export function reportWebVitals(metric) {
  // Log Core Web Vitals to Google Analytics
  logEvent('Web Vitals', metric.name, metric.label, Math.round(metric.value));
}

export default MyApp
