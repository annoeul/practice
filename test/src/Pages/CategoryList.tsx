import React from "react"
import { useQuery } from "react-query"
import { getPosts } from "../axios/http"
import Category from "../Components/Category"
import { PostT } from "../model/post"

const CategoryList = () => {
  const { data: posts, isLoading, isError } = useQuery<PostT[]>("posts", getPosts)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching posts</div>

  const uniquePostIds = Array.from(new Set(posts.map((post: PostT) => post.userId)))

  return (
    <div>
      {uniquePostIds.map((postId) => (
        <Category key={postId} postId={postId} />
      ))}
    </div>
  )
}

export default CategoryList
