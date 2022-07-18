class UserTokenService {
  getLocalRefreshToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.refreshToken;
    }
  }

  getLocalAccessToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.accessToken;
    }
  }

  updateLocalAccessToken(accessToken: string) {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      userToken.accessToken = accessToken;
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }

  removeUser() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("userToken");
    }
  }

  getUserToken() {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken;
    }
  }

  setUserToken(userToken: object) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }
}

export default new UserTokenService();
