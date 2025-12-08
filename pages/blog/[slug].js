import { getFileBySlug, getFiles, getAvailableLanguages } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { BlogContainer } from "../../components/BlogContainer";
import Head from "next/head";
import Script from "next/script";
import { BLOG_URL, PAGE_URL } from "../../lib/consts";
import { SocialShareButtons } from "../../components/SocialShareButtons";
import { NewsletterSubscribe } from "../../components/NewsletterSubscribe";
import { useLanguage } from "../../lib/LanguageContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import styled from "styled-components";
import { getArticleSchema, getBreadcrumbSchema } from "../../lib/structuredData";
import ErrorBoundary from "../../components/ErrorBoundary";

/**
 * Bilingual Blog Post Component
 * 
 * This component integrates with the navbar language switcher to provide
 * seamless bilingual blog post experience:
 * 
 * - When user changes language via navbar, the post dynamically reloads in the new language
 * - Shows notification banner when translation is available but not currently displayed
 * - Falls back gracefully when translation doesn't exist
 * - No separate language switcher needed - uses global navbar control
 */

const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem 4rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 4rem 6rem;
  }
`;

export default function Post({ source: initialSource, frontmatter: initialFrontmatter }) {
  const { language } = useLanguage();
  const router = useRouter();
  const [source, setSource] = useState(initialSource);
  const [frontmatter, setFrontmatter] = useState(initialFrontmatter);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // When language changes, reload the blog post in the new language
    const loadPostInLanguage = async () => {
      if (!router.query.slug) return;
      
      setIsLoading(true);
      try {
        const response = await fetch(`/api/post?slug=${router.query.slug}&lang=${language}`);
        if (response.ok) {
          const data = await response.json();
          setSource(data.source);
          setFrontmatter(data.frontmatter);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only reload if the language differs from current post language
    if (language !== frontmatter.lang) {
      loadPostInLanguage();
    }
  }, [language, router.query.slug, frontmatter.lang]);
  
  const articleSchema = getArticleSchema(frontmatter);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: PAGE_URL },
    { name: "Blog", url: BLOG_URL },
    { name: frontmatter.title, url: `${BLOG_URL}/${frontmatter.slug}` }
  ]);

  // Truncate abstract for meta description if too long
  const metaDescription = frontmatter.abstract.length > 160 
    ? frontmatter.abstract.substring(0, 157) + "..."
    : frontmatter.abstract;

  return (
    <PageContainer>
      <Head>
        <title>{`${frontmatter.title} | Carlos García 👨🏽‍💻`}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={frontmatter.tag} />
        <meta name="author" content="Carlos García" />
        <meta property="og:title" content={frontmatter.title} />
        <meta name="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BLOG_URL}/${frontmatter.slug}`} />
        <meta property="og:image" content={frontmatter.image} />
        <meta
          property="article:published_time"
          content={frontmatter.published}
        />
        <meta property="article:tag" content={frontmatter.tag} />
        <meta property="article:author" content="Carlos García" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={frontmatter.image} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <MainContent>
        <BlogContainer>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {frontmatter.lang !== language && frontmatter.availableLanguages?.includes(language) && (
                <div style={{
                  padding: '1rem 1.5rem',
                  background: '#eff6ff',
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  color: '#1e40af',
                  fontSize: '0.95rem'
                }}>
                  💡 {language === 'en' 
                    ? 'This article is available in English! Use the language switcher in the navigation bar.' 
                    : 'Este artículo está disponible en Español! Usa el selector de idioma en la barra de navegación.'}
                </div>
              )}
              {frontmatter.lang !== language && !frontmatter.availableLanguages?.includes(language) && (
                <div style={{
                  padding: '1rem 1.5rem',
                  background: '#fef3c7',
                  border: '1px solid #f59e0b',
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  color: '#92400e',
                  fontSize: '0.95rem'
                }}>
                  ℹ️ {language === 'en'
                    ? 'This article is only available in Spanish.' 
                    : 'Este artículo solo está disponible en Español.'}
                </div>
              )}
              {frontmatter.title && <h1>{frontmatter.title}</h1>}
              {frontmatter.date && (
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {frontmatter.date}
                  {frontmatter.readingTime && (
                    <span> • {frontmatter.readingTime} min read</span>
                  )}
                </p>
              )}
              <ErrorBoundary fallbackMessage="The blog content failed to render. Please try refreshing the page.">
                <MDXRemote {...source} components={MDXComponents} />
              </ErrorBoundary>
              <NewsletterSubscribe />
            </>
          )}
          <SocialShareButtons post={frontmatter}></SocialShareButtons>
          <div className="giscus"></div>
        </BlogContainer>
      </MainContent>
      <Footer />
      <Script
        src="https://giscus.app/client.js"
        data-repo="solrac97gr/carlos.lat"
        data-repo-id="R_kgDOHl_QEQ"
        data-category="General"
        data-category-id="DIC_kwDOHl_QEc4CQrs_"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="es"
        data-loading="lazy"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <Script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="carlosgarcA"
        data-description="Apoyame usando Buy me a coffee!"
        data-message="Gracias por visitar mi blog!"
        data-color="#40DCA5"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        strategy="lazyOnload"
      />
    </PageContainer>
  );
}

export async function getStaticProps({ params }) {
  // Try to get the post in the user's preferred language, fallback to Spanish
  let lang = "es";
  const availableLanguages = getAvailableLanguages(params.slug);
  
  // If English version exists, prefer it (as it's now the primary language)
  if (availableLanguages.includes("en")) {
    lang = "en";
  }
  
  const { source, frontmatter } = await getFileBySlug(params.slug, lang);
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  // Get all posts from both languages
  const enPosts = getFiles("en");
  const esPosts = getFiles("es");
  
  // Combine and deduplicate slugs
  const allSlugs = new Set([
    ...enPosts.map(post => post.replace(/\.mdx/, "")),
    ...esPosts.map(post => post.replace(/\.mdx/, ""))
  ]);
  
  const paths = Array.from(allSlugs).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
