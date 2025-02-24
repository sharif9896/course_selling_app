import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: [],
  reducers: {
    addcourse: (state, action) => {
      return action.payload;
    },
  },
});
export const courseAction = courseSlice.actions;
export default courseSlice;
