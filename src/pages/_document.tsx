import Document, { Html, Head, Main, NextScript } from 'next/document'
import {link} from "../data/link"
const eren1 = (link +"/eren-1.png");
const sitemenifest = (link +"/eren-1.png");

class AppDocument extends Document {
  render() {
   console.log(eren1)
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://vitals.vercel-insights.com"/>
          <link rel="preconnect" href="https://ws.audioscrobbler.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
           <link rel="apple-touch-icon" sizes="152x152" href={eren1} />
          <link rel="icon" type="image/png" sizes="32x32" href={eren1} />
          <link rel="icon" type="image/png" sizes="16x16" href={eren1} />
       
          <link rel="manifest" href={link +"/site.webmanifest"} />
          <link rel="mask-icon" href={link +"/safari-pinned-tab.svg"} color="#FFFFFF" />
          <meta property="og:url" content="https://ven.earth" />
          <meta property="og:site_name" content="Erenci" />
          {/* <meta property="og:image" content="/img/ven.jpg" /> */}
          <meta property="og:image" content="/eren-1.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://ven.earth/img/ven.jpg" />
        </Head>
        <body className="bg-white dark:bg-black text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument