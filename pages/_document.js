import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head />
      {/* <Script */}
      {/* src='https://code.jquery.com/jquery-3.6.0.slim.min.js' */}
      {/* integrity='sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=' */}
      {/* crossorigin='anonymous' */}
      {/* strategy='beforeInteractive' */}
      {/* /> */}
      {/* <Script */}
      {/* src='/assets/js/jquery.scrollex.min.js' */}
      {/* strategy='beforeInteractive' */}
      {/* /> */}
      {/* <Script */}
      {/* src='/assets/js/jquery.scrolly.min.js' */}
      {/* strategy='beforeInteractive' */}
      {/* /> */}
      {/* <Script src='/assets/js/browser.min.js' strategy='beforeInteractive' /> */}
      {/* <Script */}
      {/* src='/assets/js/breakpoints.min.js' */}
      {/* strategy='beforeInteractive' */}
      {/* /> */}
      {/* <Script src='/assets/js/util.js' strategy='beforeInteractive' /> */}
      {/* <Script src='/assets/js/main.js' strategy='beforeInteractive' /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
