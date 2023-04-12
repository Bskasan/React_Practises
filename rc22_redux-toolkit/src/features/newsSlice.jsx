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
    const API_KEY = "030d6387a2cf4432ba2a47aa06338505";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
      const { data } = await axios(url);
      console.log(data);
      return data;
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
