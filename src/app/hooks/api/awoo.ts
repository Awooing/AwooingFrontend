import { req } from "@/app/axios"
import { awooBar } from "@/app/topbar"
import { reactive } from "vue"
import { CdnFile } from "../../../../../AwooingBackend/src/fetchers/cdn.fetcher"

export interface AwooRawResponse {
  awoo: CdnFile
}

export const fetchRandomImage = async () => {
  try {
    const { data: res } = await req<AwooRawResponse>({
      method: "GET",
      url: "/awoo"
    })

    return res.data
  } catch (e) {
    console.error("ERROR AWOOO")
    console.log({ e })
    return false
  }
}

export const hookRandomImage = () => {
  const data = reactive({
    image: null as AwooRawResponse["awoo"] | null | false
  })

  const fetchData = async () => {
    const res = await awooBar.promised(fetchRandomImage())

    data.image = res ? res.awoo : false
  }

  fetchData()

  return {
    data,
    refetch: fetchData
  }
}

export default fetchRandomImage
