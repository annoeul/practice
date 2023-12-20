// Import dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Post } from "../models/Post"

// Create API
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
  }),
})

// Export the generated hooks
export const { useGetPostsQuery } = postApi
