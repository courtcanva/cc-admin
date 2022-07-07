import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { Chakra } from "@/styles/Chakra";
import Layout from "@/layouts";
import SideBar from "@/components/SideBar";

function CourtCanvaApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Provider store={store}>
        <Layout>
          <SideBar />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Chakra>
  );
}

export default CourtCanvaApp;
