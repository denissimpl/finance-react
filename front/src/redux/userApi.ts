import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { IAuthRequest } from "../types/types"


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4444/"}),
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (body: IAuthRequest) => ({
              url: '/login',
              method: 'POST',
              body: JSON.stringify(body),
            }),
          }),
        userRegister: build.mutation({
          query: (body: IAuthRequest) => ({
            url: '/register',
            method: 'POST',
            body: JSON.stringify(body),
          }),
        }),
    })
})

export const {useUserLoginMutation, useUserRegisterMutation} = userApi