import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "services/Api";

import AxiosDefault from "services/AxiosDefault";

const initialState = {
  loading: false,
};

// School
export const addEditSchool = createAsyncThunk(
  "dashboard/addEditSchool",
  async (data) => {
    try {
      const response = await AxiosDefault({
        method: "POST",
        url: Api.ADD_EDIT_SCHOOL,
        data: data,
      });
      return response.data;
    } catch (err) {
      return {
        status: err.response.data.status,
        message: err.response.data.message,
      };
    }
  }
);
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEditSchool.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEditSchool.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addEditSchool.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
