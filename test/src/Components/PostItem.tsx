import React from "react"
import { PostT } from "../model/post"

type Props = {
  post: PostT
}

function PostItem({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem
