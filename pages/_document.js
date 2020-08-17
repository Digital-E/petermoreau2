import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js" integrity="sha512-JO6JyFPJupQKZf7icgZkHwuq/rAQxH7COqvEd4WdK52AtHPedwHog05T69pIelI69jVN/zZbW6TuHfH2mS8j/Q==" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollToPlugin.min.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
