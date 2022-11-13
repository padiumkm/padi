import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  user: {
    avatar: "",
    nik: null,
    position: null,
    name: "",
    email: "",
    phone_number: "",
    office_number: "",
    total_cart: "",
    total_notificaton: "",
    has_submit_nps: false,
  },
};

export const sliceProfile = createSlice({
  name: "ProfileReducer",
  initialState: initialValue,
  reducers: {},
});

export default sliceProfile.reducer;