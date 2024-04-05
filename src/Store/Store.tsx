import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slicer/counterSlice";

export const store:any = configureStore({
    reducer:counterSlice
})