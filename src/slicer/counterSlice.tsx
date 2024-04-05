import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        incCount: (state, action) => {
            state.count = state.count + action.payload
        },
        decCount: (state, action) => {
            state.count = state.count - action.payload
        }
    }
})

export const {incCount, decCount} = counterSlice.actions

export default counterSlice.reducer