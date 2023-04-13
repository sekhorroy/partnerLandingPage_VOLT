import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="canonical" href="https://www.voltmoney.in/partner" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
          />
          <link rel="icon" href="%PUBLIC_URL%/favicon.svg" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />

          {/*google tag start*/}
          <script
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-TMWSSRS');`
            }}
          />

          <script dangerouslySetInnerHTML={{__html: `async src="https://www.googletagmanager.com/gtag/js?id=AW-11053018943"`}} />
          <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11053018943');`
          }} />
          {/*google tag end*/}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*Google Tag Manager (noscript)*/}
        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMWSSRS" height="0" width="0" style="display:none;visibility:hidden" />`,
            }}
        />
        {/*End Google Tag Manager (noscript)*/}
      </body>
    </Html>
  );
}
