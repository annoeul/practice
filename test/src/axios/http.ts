import axios from "axios"
import { QueryClient } from "react-query"

export const queryClient = new QueryClient()

export const getPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
}
