import { configureStore } from "@reduxjs/toolkit";
import { featuresReducers } from "../Features/Features";

export const store = configureStore({
    reducer: featuresReducers
});