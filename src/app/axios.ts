import Axios from "axios"

export const createAxios = () => {
  const axios = Axios
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? "https://api.awooing.moe/v2"
      : "http://localhost:8000"

  return axios
}

export default createAxios()
