import Head from "next/head";

export default function Meta({ title, content, ogImage }) {

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link rel="icon" href="/images/favicon_io/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
      {/* <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name={title}
        content={content}
      />
      <meta name="title" property="og:title" content={title} />
      <meta name="description" property="og:description" content={content} />
      <meta name="image" property="og:image" content={ogImage !== null ? ogImage.url : null} />
      <title>{title}</title>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-M22C9PTKTN" />
      <script
        dangerouslySetInnerHTML={{__html:
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M22C9PTKTN');
          `
        }}
      />
    </Head>
  );
}
