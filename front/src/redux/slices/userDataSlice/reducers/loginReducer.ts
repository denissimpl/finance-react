import type {IUserDataState} from "../initialState";

export const loginReducer = (state:IUserDataState) => {
    state.user.logged = true
}