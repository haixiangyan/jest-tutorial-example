import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "apis/user";

export const fetchUserThunk = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetchUser();
  return response.data;
});
