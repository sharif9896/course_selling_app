import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./courseSlice";
import AuthenticSlice from "./AuthenticSlice";

const courseStore = configureStore({
  reducer: {
    courses: courseSlice.reducer,
    Logout: AuthenticSlice.reducer,
  },
});
export default courseStore;
