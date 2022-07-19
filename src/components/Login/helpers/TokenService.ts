interface IUserToken {
  accessToken: string;
  refreshToken: string;
}

class UserTokenService {
  getLocalRefreshToken(): string | undefined {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.refreshToken;
    }
  }

  getLocalAccessToken(): string | undefined {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken.accessToken;
    }
  }

  updateLocalAccessToken(accessToken: string): void {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      userToken.accessToken = accessToken;
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }

  removeUser(): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("userToken");
    }
  }

  getUserToken(): IUserToken | undefined {
    if (typeof window !== "undefined") {
      const userToken = JSON.parse(window.localStorage.getItem("userToken") as string);
      return userToken;
    }
  }

  setUserToken(userToken: IUserToken | object) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("userToken", JSON.stringify(userToken));
    }
  }
}

export default new UserTokenService();
