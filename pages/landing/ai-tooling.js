import Head from "next/head";
import { AIToolingLanding } from "../../components/AIToolingLanding";
import { useLanguage } from "../../lib/LanguageContext";
import { PAGE_URL } from "../../lib/consts";
import { useEffect } from "react";

export default function AIToolingPage() {
  const { t, changeLanguage } = useLanguage();

  // Force Spanish language on this page
  useEffect(() => {
    changeLanguage('es');
  }, [changeLanguage]);

  return (
    <>
      <Head>
        <title>{t("aiTooling.meta.title")}</title>
        <meta name="description" content={t("aiTooling.meta.description")} />
        <meta
          name="keywords"
          content="AI tooling, plugin marketplace, Claude AI, code consistency, automation, developer productivity, custom plugins, AI development tools"
        />
        <meta name="author" content="Carlos García" />
        <meta property="og:title" content={t("aiTooling.meta.title")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${PAGE_URL}/landing/ai-tooling`} />
        <meta
          property="og:image"
          content="https://carlos.lat/og-image.png"
        />
        <meta
          property="og:description"
          content={t("aiTooling.meta.description")}
        />
        <meta name="twitter:title" content={t("aiTooling.meta.title")} />
        <meta
          name="twitter:description"
          content={t("aiTooling.meta.description")}
        />
        <meta
          name="twitter:image"
          content="https://carlos.lat/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/mark.svg" />
        <link rel="canonical" href={`${PAGE_URL}/landing/ai-tooling`} />

        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="es" href={`${PAGE_URL}/landing/ai-tooling`} />
        <link rel="alternate" hrefLang="en" href={`${PAGE_URL}/landing/en/ai-tooling`} />
        <link rel="alternate" hrefLang="x-default" href={`${PAGE_URL}/landing/ai-tooling`} />
      </Head>
      <main>
        <AIToolingLanding hideLanguageSwitcher={true} />
      </main>
    </>
  );
}
