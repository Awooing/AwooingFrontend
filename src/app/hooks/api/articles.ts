import axios from "@/app/axios"
import { reactive } from "vue"
import ArticleDto from "../../../../../AwooingBackend/src/dto/db/ArticleDto"

export interface PageInfo {
  current: number
  last: number
}

export interface FetchArticleParams {
  perPage: number
  currentPage: number
}

export interface ArticleListRawResponse {
  posts: ArticleDto[]
  pageInfo: PageInfo
}

export const fetchArticles = async ({
  perPage = 2,
  currentPage = 1
}: FetchArticleParams) => {
  try {
    const { data: res } = await axios.request<ArticleListRawResponse>({
      method: "GET",
      url: "/article/list",
      params: {
        perPage,
        currentPage
      }
    })

    return res
  } catch (e) {
    console.log({ e })
    return false
  }
}

export const hookArticles = () => {
  const data = reactive({
    posts: null as ArticleListRawResponse["posts"] | false | null,
    pageInfo: null as ArticleListRawResponse["pageInfo"] | null
  })

  const fetchData = async () => {
    const res = await fetchArticles({
      perPage: 2,
      currentPage: 1
    })

    if (!res) {
      data.posts = false
      data.pageInfo = null

      return
    }

    data.posts = res.posts
    data.pageInfo = res.pageInfo
  }

  fetchData()

  return data
}

export default fetchArticles
