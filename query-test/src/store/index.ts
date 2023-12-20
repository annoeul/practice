import { configureStore } from "@reduxjs/toolkit"
import { postApi } from "../apis/postApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import postReducer from "./slices/postSlice"

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
setupListeners(store.dispatch)

export default store
