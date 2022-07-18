import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "../store";
import { Chakra } from "@/styles/Chakra";
import Layout from "@/layouts";
import Login from "./login";
import userAuthRequest from "@/components/Login/helpers/authRequest";
import UserTokenService from "@/components/Login/helpers/TokenService";

function CourtCanvaApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { updateToken } = userAuthRequest();

  updateToken(); // check user refresh token TODO: using axios interceptors instead

  let accessToken;
  if (UserTokenService.getUserToken() !== null) {
    accessToken = UserTokenService.getUserToken()?.accessToken;
  }

  useEffect(() => {
    UserTokenService.getUserToken() === null && router.push("/login");
  }, []);

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
