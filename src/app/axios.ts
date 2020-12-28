import Axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {
  SuccessResponse,
  ErrorDescription,
  ErrorResponse
} from "../../../AwooingBackend/src/http/helpers/response.helper"

export const createAxios = () => {
  const axios = Axios
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? "https://api.awooing.moe/v2"
      : "http://localhost:8000"

  return axios
}

const instance = createAxios()

export class BackendFetchError extends Error {
  error: ErrorDescription
  res?: AxiosResponse

  constructor(error: ErrorDescription, res?: AxiosResponse) {
    super(error.message)
    this.name = "BackendFetchError"
    this.error = error
    this.res = res
  }
}

export const req = async <
  R = unknown,
  E extends ErrorDescription = ErrorDescription
>(
  config: AxiosRequestConfig
) => {
  const request = await instance.request<SuccessResponse<R> | ErrorResponse<E>>(
    config
  )

  if (!request.data.success) {
    console.log(request.data)
    throw new BackendFetchError(request.data.error, request)
  }
  return request as AxiosResponse<SuccessResponse<R>>
}

export default instance
