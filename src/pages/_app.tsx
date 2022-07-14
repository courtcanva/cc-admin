import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { Chakra } from "@/styles/Chakra";
import Layout from "@/layouts";
import Login from "./login";

function CourtCanvaApp({ Component, pageProps }: AppProps) {
  let accessToken;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const userToken = JSON.parse(window.localStorage.getItem("userToken")!);
    accessToken = userToken?.accessToken;
  }

  if (!accessToken)
    return (
      <Chakra cookies={pageProps.cookies}>
        <Provider store={store}>
          <Login />
        </Provider>
      </Chakra>
    );

  return (
    <Chakra cookies={pageProps.cookies}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Chakra>
  );
}

export default CourtCanvaApp;
