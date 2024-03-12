import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import loggedSlice from "./loggedSlice"
import userDataSlice from "./userDataSlice";
import loadingSlice from "./loadingSlice";
import notificationSlice from "./notificationSlice";
import socketDataSlice from "./socketDataSlice";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath] : userApi.reducer,
        logged: loggedSlice,
        userData: userDataSlice,
        loading: loadingSlice,
        notification: notificationSlice,
        socketData: socketDataSlice
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

