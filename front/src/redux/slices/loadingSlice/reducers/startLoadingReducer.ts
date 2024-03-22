import { ILoadingState } from "../initialState"

export const startLoadingReducer = (state:ILoadingState) => {
    state.value = true
}