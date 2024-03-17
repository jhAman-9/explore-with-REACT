import { createSlice } from "@reduxjs/toolkit"

// making slice for privacy
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state = !state
    }
  }
})

export const privacyAction = privacySlice.actions;
export default privacySlice