import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sliceProfile from "./slice/sliceProfile";

const reducer = combineReducers({
  ProfileReducer: sliceProfile,
});

export const store = configureStore({ reducer });
