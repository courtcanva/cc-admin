import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { Chakra } from "@/styles/Chakra";
import Layout from "@/layouts";
import Login from "./login";
import userAuthRequest from "@/components/Login/helpers/authRequest";
import userTokenService from "@/components/Login/helpers/tokenService";

function CourtCanvaApp({ Component, pageProps }: AppProps) {
  const { updateToken } = userAuthRequest();
  const { getUserToken } = userTokenService();

  updateToken(); // check user refresh token TODO: using axios interceptors instead

  let accessToken;
  if (getUserToken() !== null) accessToken = getUserToken();

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
