import { createSlice } from "@reduxjs/toolkit";

const AuthenticSlice = createSlice({
  name: "Logout",
  initialState: {
    Boolean: false,
  },
  reducers: {
    addtrue: (state, action) => {
     return state.Boolean = action.payload;
    },
  },
});
export const AuthAction = AuthenticSlice.actions;
export default AuthenticSlice;
