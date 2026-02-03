import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllFilesMetadata } from "../lib/mdx";
import { PAGE_URL } from "../lib/consts";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { getPersonSchema, getWebsiteSchema } from "../lib/structuredData";

export default function Home({ posts }) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Carlos García | Consultoría IT & Desarrollo de Software
        </title>
        <meta
          name="description"
          content="Ayudo a las empresas a aprovechar la inteligencia artificial y estrategias basadas en datos para optimizar la tecnología y impulsar un crecimiento inteligente."
        />
        <meta name="keywords" content="IA, inteligencia artificial, desarrollo software, visualización datos, consultoría IT" />
        <meta name="author" content="Carlos García" />
        <meta
          property="og:title"
          content="Carlos García | Consultoría IT & Desarrollo de Software"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta
          property="og:description"
          content="Ayudo a las empresas a aprovechar la inteligencia artificial y estrategias basadas en datos."
        />
        <meta
          name="twitter:title"
          content="Carlos García | Consultoría IT & Desarrollo de Software"
        />
        <meta
          name="twitter:description"
          content="Ayudo a las empresas a aprovechar la inteligencia artificial y estrategias basadas en datos."
        />
        <meta
          name="twitter:image"
          content="https://miro.medium.com/max/1400/1*xofqkz49chC9XliDAuH1Qw.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <main>
        <Hero numberOfPosts={posts.length} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
