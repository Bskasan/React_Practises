import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews", //? action types

  //? async callback func.
  async () => {
    const API_KEY = "94d9a13ccee34f9e890d74f6aa65b7a7";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
