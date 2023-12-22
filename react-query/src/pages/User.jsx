import React from "react"
import { useQueries, useQuery } from "react-query"
import { getUsers } from "../apis/services/users"
import { getPosts } from "../apis/services/posts"

function User() {
  const results = useQueries([
    {
      queryKey: "users",
      queryFn: getUsers,
    },
    {
      queryKey: "posts",
      queryFn: getPosts,
    },
  ])
  if (results.some((result) => result.isLoading)) return <>로딩중</>
  return <div>User</div>
}

export default User
