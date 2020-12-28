import { req } from "@/app/axios"
import { awooBar } from "@/app/topbar"
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

export interface ArticleListResponse {
  posts: ArticleDto[]
  pageInfo: PageInfo
}

export const fetchArticles = async ({
  perPage = 2,
  currentPage = 1
}: FetchArticleParams) => {
  try {
    const { data: res } = await req<ArticleListResponse>({
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
    posts: null as ArticleListResponse["posts"] | false | null,
    pageInfo: null as ArticleListResponse["pageInfo"] | null
  })

  const fetchData = async () => {
    const res = await awooBar.promised(
      fetchArticles({
        perPage: 2,
        currentPage: 1
      })
    )

    if (!res) {
      data.posts = false
      data.pageInfo = null

      return
    }

    data.posts = res.data.posts
    data.pageInfo = res.data.pageInfo
  }

  fetchData()

  return data
}

export default fetchArticles
