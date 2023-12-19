import "@/styles/globals.scss";
import type { AppProps } from "next/app";

// layout
import Layout from "@/layouts";
// redux
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}