import type {IUserDataState} from "../initialState";

export const exitReducer = (state:IUserDataState) => {
    state.user.logged = false
}