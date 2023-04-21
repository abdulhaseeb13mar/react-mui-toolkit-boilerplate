import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppReducer, ThemeMode } from "Types";

const initialState: AppReducer = {
  mode: "light",
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export default app.reducer;

export const { changeThemeMode } = app.actions;
