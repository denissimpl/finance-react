import { ILoadingState } from "../initialState"

export const stopLoadingReducer = (state:ILoadingState) => {
    state.value = false
}