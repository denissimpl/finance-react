import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import loggedSlice from "./loggedSlice"
import userDataSlice from "./userDataSlice";
import loadingSlice from "./loadingSlice";
import notificationSlice from "./notificationSlice";
import socketDataSlice from "./socketDataSlice";
import { socketApi } from "./socketApi";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath] : userApi.reducer,
        [socketApi.reducerPath] : socketApi.reducer,
        logged: loggedSlice,
        userData: userDataSlice,
        loading: loadingSlice,
        notification: notificationSlice,
        socketData: socketDataSlice
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(userApi.middleware).concat(socketApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch