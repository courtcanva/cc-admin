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

export const loginRequest = async (email: string, password: string) => {
  try {
    const response: AxiosResponse = await api("/admin/login", {
      method: "post",
      requestData: { email, password },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
