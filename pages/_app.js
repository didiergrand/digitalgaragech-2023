import '@component/styles/tailwind.css'
import '@component/styles/globals.scss'
import Script from 'next/script'
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  let pageTitle = "Didier Grand - web développeur créatif";
  if(pageProps.title){
    pageTitle = pageProps.title + " | Didier Grand - web développeur créatif" || "Didier Grand - web développeur créatif";
  }
  let pageDescription
  if(pageProps.description){
   pageDescription = pageProps.description || "Développeur front-end, designer web créatif et photographe passionné, je présente mes travaux, compétences et services pour la création de sites web et adaptés à vos besoins. Je suis actif dans la région de Fribourg, Bulle, ou Châtel-St-Denis. Contactez-moi pour discuter de votre projet";
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        {/* meta description */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
