import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  currentLanguage: "",
};

const counterSlice = createSlice({
  name: "addingData",
  initialState,
  reducers: {
    SetLanguageChange(state, action) {
      state.currentLanguage = action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
