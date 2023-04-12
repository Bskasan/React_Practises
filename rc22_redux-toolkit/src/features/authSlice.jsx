import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // setUser: (state, {payload}) => {
      state.user = action.payload;
    },
    clearUser: () => {
      state.user = "";
    },
  },
});

//* To export our methods in Slice
export const { setUser, clearUser } = authSlice.actions;

//* To export everything in Slice
export default authSlice.reducer;
