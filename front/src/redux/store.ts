import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import loggedSlice from "./slices/loggedSlice"
import userDataSlice from "./slices/userDataSlice";
import loadingSlice from "./slices/loadingSlice";
import notificationSlice from "./slices/notificationSlice";
import socketDataSlice from "./slices/socketDataSlice";
import { socketApi } from "./api/socketApi";


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