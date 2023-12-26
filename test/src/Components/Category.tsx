import React from "react"
import { useDispatch } from "react-redux"
import { selectCategory } from "../store/slices/category"

type CategoryProps = {
  postId: number
}

function Category({ postId }: CategoryProps) {
  const dispatch = useDispatch()

  const handleCategory = (id) => {
    dispatch(selectCategory(id))
  }

  return <button onClick={() => handleCategory(postId)}>{postId}</button>
}

export default Category
