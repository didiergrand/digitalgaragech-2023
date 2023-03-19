import '@component/styles/tailwind.css'
import '@component/styles/globals.scss'
// import the Head component for appending elements to the head of the page
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
