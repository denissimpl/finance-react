import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import userDataSlice from "./slices/userDataSlice/userDataSlice";
import loadingSlice from "./slices/loadingSlice/loadingSlice";
import notificationSlice from "./slices/notificationSlice/notificationSlice";
import { socketApi } from "./api/socketApi";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath] : userApi.reducer,
        [socketApi.reducerPath] : socketApi.reducer,
        userData: userDataSlice,
        loading: loadingSlice,
        notification: notificationSlice
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(userApi.middleware).concat(socketApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch