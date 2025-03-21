import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Voici mon portfolio décrivant mes stacks et mes projets réalisés"
        />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
