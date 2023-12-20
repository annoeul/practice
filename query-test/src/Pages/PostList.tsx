// PostList.js

import React, { useEffect, useState } from "react"
import Posts from "../components/Posts"
import { Post } from "../models/Post"
import { useGetPostsQuery } from "../apis/postApi"
import { useDispatch, useSelector } from "react-redux"
import { checkpost } from "../store/slices/postSlice"

function PostList() {
  const { data: posts } = useGetPostsQuery<Post[]>()
  const [uniqueUserIds, setUniqueUserIds] = useState<Set<number>>(new Set())
  const dispatch = useDispatch()
  const selectedUserId = useSelector((state) => state.post.selectedUserId)

  useEffect(() => {
    if (posts) {
      const uniqueIds = new Set(posts.map((post: Post) => post.userId))
      setUniqueUserIds(uniqueIds)
    }
  }, [posts])

  const filteredPosts = posts?.filter((post) => post.userId === selectedUserId)

  // 항상 첫 번째 데이터가 보이게 하기
  const firstPost = filteredPosts ? filteredPosts[0] : null

  return (
    <div>
      <div style={{ display: "flex" }}>
        {Array.from(uniqueUserIds).map((userId) => (
          <div key={userId} style={{ marginRight: "8px" }}>
            <button onClick={() => dispatch(checkpost(userId))}>
              {userId}
            </button>
          </div>
        ))}
      </div>
      {posts && <Posts posts={firstPost} />}
    </div>
  )
}
export default PostList
