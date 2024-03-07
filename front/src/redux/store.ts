import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import loggedSlice from "./loggedSlice"
import userDataSlice from "./userDataSlice";
import loadingSlice from "./loadingSlice";
import notificationSlice from "./notificationSlice";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath] : userApi.reducer,
        logged: loggedSlice,
        userData: userDataSlice,
        loading: loadingSlice,
        notification: notificationSlice
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

