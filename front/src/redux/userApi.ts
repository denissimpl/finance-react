import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { IPostUser } from "../types/types"
export const goodsApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4444/"}),
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (body: IPostUser) => ({
              url: '/login',
              method: 'POST',
              body: JSON.stringify(body),
            }),
          }),
    })
})

export const {useUserLoginMutation} = goodsApi