import React, { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { createPost } from "../apis/services/posts"

function PostCreate() {
  const queryClient = useQueryClient()
  const { isLoading, error, mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    },
  })

  const [post, setPost] = useState({ title: "", body: "" })

  const onChange = (e) => {
    const { name, value } = e.target
    setPost((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div>
      <input name="title" value={post.title} onChange={onChange} />
      <input name="body" value={post.body} onChange={onChange} />

      <button onClick={() => mutate(post)}>글쓰기</button>
    </div>
  )
}

export default PostCreate
