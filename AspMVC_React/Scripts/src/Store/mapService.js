import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mapSericeRecived",
  initialState: {
    list: [],
    loading: false,
    lastFeatch: null,
  },
  reducers: {
    dataReceived: (name, action) => {
      name.list.push(action.payload);
    },
    dataUpdate: (name, action) => {
      name.list.name = action.payload.name;
    },
  },
});

export const { dataReceived, dataUpdate } = slice.actions;
export default slice.reducer;
