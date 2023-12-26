import { createSlice } from "@reduxjs/toolkit"

const initialState = { categoryId: 0 }

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.categoryId = action.payload
    },
  },
})

export const { selectCategory } = categorySlice.actions
export default categorySlice.reducer
