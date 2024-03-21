import type {IUserDataState} from "../initialState";

export interface IUpdateUserDataAction {
    payload: {
        login: string,
        password: string,
        status: boolean
    }
}

export const updateUserDataReducer = (state:IUserDataState, action:IUpdateUserDataAction) => {
    state.user.login = action.payload.login
    state.user.password = action.payload.password
    state.user.status = action.payload.status
}