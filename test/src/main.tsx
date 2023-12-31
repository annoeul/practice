import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./axios/http.ts"
import { Provider } from "react-redux"
import { store } from "./store/index.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
