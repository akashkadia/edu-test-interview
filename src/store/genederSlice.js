import { createSlice } from "@reduxjs/toolkit";
const initialState = { gender: "", maritalStatus: "" };
export const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    genderSelection: (state, action) => {
      state.gender = action.payload;
    },
    maritalSelection: (state, action) => {
      state.maritalStatus = action.payload;
    },
  },
});
export const { genderSelection ,maritalSelection} = genderSlice.actions;

export default genderSlice.reducer;
