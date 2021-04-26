import Head from "next/head"
import "../styles/globals.css"
import "../styles/home.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/cs-logo.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
