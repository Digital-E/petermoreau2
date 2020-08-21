import "../styles/index.css";
import { configureLanguage } from "../utils/language";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// App.getInitialProps = async ({ component, ctx }) => {

//   const language = configureLanguage(ctx);

//   return {
//     language,
//   };
// };

export default App;
