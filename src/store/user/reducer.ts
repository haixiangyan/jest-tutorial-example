import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk } from "./thunks";

const initialState = {
  id: "",
  name: "",
  age: 0,
  status: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.status = "complete";
      state.name = action.payload.name;
      state.id = action.payload.id;
    });
    builder.addCase(fetchUserThunk.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
