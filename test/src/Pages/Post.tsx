import React from "react"
import { useQuery } from "react-query"
import { getPosts } from "../axios/http"
import { PostT } from "../model/post"
import PostItem from "../Components/PostItem"
import { useSelector } from "react-redux"

function Post() {
  // React Query를 이용하여 데이터 가져오기
  const { data: posts, isLoading, isError } = useQuery<PostT[]>("posts", getPosts)

  // Redux의 선택된 카테고리 ID 가져오기
  const selectedCategory = useSelector((state) => state.category.categoryId)

  // 선택된 카테고리에 해당하는 포스트만 필터링
  const filteredPosts = posts?.filter((post) => post.userId === selectedCategory) || []

  if (isLoading) return <>로딩중</>
  if (isError) return <>error</>

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  )
}

export default Post
