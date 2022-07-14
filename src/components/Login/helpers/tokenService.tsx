export default function userTokenService() {
  function getLocalRefreshToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.refreshToken;
    }
  }

  function getLocalAccessToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.accessToken;
    }
  }

  function updateLocalAccessToken(accessToken: string) {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      userToken.accessToken = accessToken;
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }

  function removeUser() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("userToken");
    }
  }

  function getUserToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
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
