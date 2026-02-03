import Head from "next/head";
import { AIToolingLanding } from "../../../components/AIToolingLanding";
import { useLanguage } from "../../../lib/LanguageContext";
import { PAGE_URL } from "../../../lib/consts";
import { useEffect } from "react";

export default function AIToolingEnglishPage() {
  const { t, changeLanguage } = useLanguage();

  // Force English language on this page
  useEffect(() => {
    changeLanguage('en');
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
        <meta property="og:url" content={`${PAGE_URL}/landing/en/ai-tooling`} />
        <meta
          property="og:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
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
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${PAGE_URL}/landing/en/ai-tooling`} />

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
