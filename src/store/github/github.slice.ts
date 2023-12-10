import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GithubState {
  favourites: string[];
}

const LS_FAV_KEY = "rfk";

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },

    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;

export const githubReducer = githubSlice.reducer;
