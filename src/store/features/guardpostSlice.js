import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    xpos: null,
    ypos: null,
    isChoose: false,
}

const guardpostSlice = createSlice({
    name: "guardpost",
    initialState,
    reducer: {
        setData: (state, payload) => {
            state.name = payload.name;
            state.xpos = payload.xpos;
            state.ypos = payload.ypos;
            state.isChoose = true;
        },
        resetData: (state) => {
            state.name = "";
            state.xpos = null;
            state.ypos = null;
            state.isChoose = false;
        },
    }
})

export const { setData, resetData } = guardpostSlice.actions;
export default guardpostSlice.reducer;