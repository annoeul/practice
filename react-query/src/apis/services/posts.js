import axios from "axios"

export const getPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
}

export const getPost = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.data
}

export const createPost = async (post) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post)
  console.log(post)
  return response.data
}

export const deletePost = async (id) => {
  const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.data
}
