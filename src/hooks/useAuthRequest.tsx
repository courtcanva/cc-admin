import useTokenService from "@/hooks/useTokenService";
import { api } from "@/utils/axios";
import { AxiosRequestConfig } from "axios";

export interface AxiosResponse<T = object> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: never;
}

export default function useAuthRequest() {
  const { removeUser, getLocalAccessToken } = useTokenService();

  const loginRequest = async (email: string, password: string) => {
    try {
      const response: AxiosResponse = await api("/admin/login", {
        method: "post",
        requestData: { email, password },
      });
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return error.response;
    }
  };

  const logoutRequest = async () => {
    console.log(getLocalAccessToken());

    try {
      await api("/admin/logout", {
        method: "post",
        token: getLocalAccessToken(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      removeUser();
    }
  };

  return { loginRequest, logoutRequest };
}
