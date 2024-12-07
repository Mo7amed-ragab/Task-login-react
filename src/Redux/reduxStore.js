import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./loginSlice";

const store = configureStore({
    reducer: {
        form: LoginReducer,
    },
});

export default store;
