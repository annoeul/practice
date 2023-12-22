import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Post from "./pages/Post"
import User from "./pages/User"
import PostCreate from "./pages/PostCreate"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <BrowserRouter>
        <nav>
          <Link to="/post">Post</Link> | <Link to="/user">User</Link> | <Link to="/post/new">글쓰기</Link>
        </nav>
        <Routes>
          <Route path="post" element={<Post />} />
          <Route path="post/new" element={<PostCreate />} />
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
