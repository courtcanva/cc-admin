import userTokenService from "@/components/Login/helpers/tokenService";
import { api } from "@/utils/axios";
import { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

export interface AxiosResponse<T = object> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: never;
}

export default function userAuthRequest() {
  const { removeUser, getLocalAccessToken, getLocalRefreshToken, setUserToken } =
    userTokenService();
  const router = useRouter();

  // avoid using any type at catch-error
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error;
    return Object(error);
  };

  const loginRequest = async (email: string, password: string) => {
    try {
      const response: AxiosResponse = await api("/admin/login", {
        method: "post",
        requestData: { email, password },
      });
      router.push("/");
      return response;
    } catch (error) {
      router.push("/login");
      const err = getErrorMessage(error);
      return err.response;
    }
  };

  const logoutRequest = async () => {
    try {
      await api("/admin/logout", {
        method: "post",
        token: getLocalAccessToken(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      removeUser();
      router.push("/login");
    }
  };

  const updateToken = async () => {
    try {
      const response: AxiosResponse = await api("/admin/refresh", {
        method: "post",
        token: getLocalRefreshToken(),
      });
      setUserToken(response.data);
    } catch (error) {
      const err = getErrorMessage(error);
      if (err.response?.status === 401) {
        removeUser();
        router.push("/login");
      }
    }
  };

  return { loginRequest, logoutRequest, updateToken };
}
