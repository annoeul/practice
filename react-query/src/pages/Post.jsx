import axios from "axios"
import React from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { deletePost, getPost, getPosts } from "../apis/services/posts"

function Post() {
  const queryClient = useQueryClient()
  const {
    data: posts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  })

  const { mutate } = useMutation(deletePost, {
    onSuccess: (id) => {
      queryClient.invalidateQueries("posts")
      // posts.filter((post) => post.id !== id)
    },
  })

  if (isLoading) return <>로딩</>
  if (isError) return <>error</>

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => mutate(post.id)}>삭제</button>
          </div>
        ))}
    </div>
  )
}

export default Post
