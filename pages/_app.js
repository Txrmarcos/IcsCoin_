import "@/styles/globals.css";

import Main from "../components/Main.js";

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
