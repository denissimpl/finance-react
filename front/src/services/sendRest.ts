import { store, userApi } from "../redux"
import { IAuthData, IAuthRequest } from "../types/types"


export const LoginRequest:(reqstArg: IAuthRequest) => IAuthData = async (restArg) => {
    return await store.dispatch(userApi.endpoints.userLogin.initiate(restArg)).unwrap()
}


export const RegisterRequest:(reqstArg: IAuthRequest) => IAuthData = async (restArg) => {
    return await store.dispatch(userApi.endpoints.userRegister.initiate(restArg)).unwrap()
}