import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.display = true;
    },
    cancel: (state) => {
      state.display = false;
    },
  },
});

export const { toggleModal, cancel } = modalSlice.actions;
export default modalSlice.reducer;
