import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect} from "react";
// layout
import Layout from '@/layouts';
//redux
import { Provider } from 'react';
// import store from "../store" when will be ready

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
