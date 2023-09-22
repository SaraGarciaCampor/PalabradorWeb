import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800;900&amp;display=swap" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}