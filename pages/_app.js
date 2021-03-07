import "../styles/globals.css";
import HomeContextProvider from "../contexts/HomeContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  );
}

export default MyApp;
