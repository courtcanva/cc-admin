import TokenService from "@/components/Login/helpers/TokenService";

const localStorageMock = (function () {
  const store: { [x: string]: object } = {};

  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: object) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const userToken = { accessToken: "accessToken", refreshToken: "refreshToken" };

it("should store userToken to localStorage", () => {
  TokenService.setUserToken(userToken);
  expect(localStorage.getItem("userToken")).toEqual(JSON.stringify(userToken));
});

it("should update accessToken to localStorage", () => {
  TokenService.updateLocalAccessToken("updated-accessToken");
  expect(localStorage.getItem("userToken")).toEqual(
    JSON.stringify({ accessToken: "updated-accessToken", refreshToken: "refreshToken" })
  );
});

it("should able to get userToken from localStorage", () => {
  TokenService.setUserToken(userToken);
  TokenService.getLocalAccessToken();
  TokenService.getLocalRefreshToken();
  expect(localStorage.getItem("userToken")).toEqual(JSON.stringify(TokenService.getUserToken()));
});

it("should remove userToken from localStorage", () => {
  TokenService.removeUser();
  expect(localStorage.removeItem("userToken")).toBe(undefined);
});
