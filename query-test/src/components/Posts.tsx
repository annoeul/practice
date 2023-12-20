import React from "react"
import { Post } from "../models/Post"
import { useSelector } from "react-redux"

interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
