import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossOrigin='anonymous' />
      </Head>

      <body>
        <Main />
        <NextScript />

        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' integrity='sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN' crossOrigin='anonymous' async />

        <Script type='text/javascript' src='javascript/vanilla-tilt.min.js' strategy='lazyOnload' />

      </body>
    </Html>
  )
}
