import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        password: "",
        isClicked: false,
        isSuccess: false,
    },
    reducers: {
        updateField: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        setClicked: (state, action) => {
            state.isClicked = action.payload;
        },
        setSuccess: (state, action) => {
            state.isSuccess = action.payload;
        },
        resetForm: (state) => {
            state.email = "";
            state.password = "";
            state.isClicked = false;
            state.isSuccess = false;
        },
    },
});

export const { updateField, setClicked, setSuccess, resetForm } =
    loginSlice.actions;

export default loginSlice.reducer;
