// postSlice.js

import { createSlice } from "@reduxjs/toolkit"

const initialState = { selectedUserId: null }

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    checkpost(state, action) {
      state.selectedUserId = action.payload
    },
  },
})

export const { checkpost } = postSlice.actions
export default postSlice.reducer
