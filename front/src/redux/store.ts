import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./userApi";
import loggedReducer from "./loggedSlice"


export const store = configureStore({
    reducer: {
        [goodsApi.reducerPath] : goodsApi.reducer,
        logged: loggedReducer
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(goodsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

