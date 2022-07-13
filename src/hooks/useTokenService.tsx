/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useStoreDispatch } from "@/store/hooks";
import { saveUserToken } from "@/store/reducer/userTokenSlice";

export default function useTokenService() {
  const dispatch = useStoreDispatch();

  function getLocalRefreshToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken")!);
      return userToken?.refreshToken;
    }
  }

  function getLocalAccessToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken")!);
      return userToken?.accessToken;
    }
  }

  function updateLocalAccessToken(accessToken: string) {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken")!);
      userToken.accessToken = accessToken;
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }

  function removeUser() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("userToken");
      dispatch(saveUserToken({ accessToken: null, refreshToken: null }));
    }
  }

  function getUserToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken")!);
      return userToken;
    }
  }

  function setUserToken(userToken: object) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }

  return {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    removeUser,
    getUserToken,
    setUserToken,
  };
}
