import { INotificationState } from "../initialState"


export const hideNotificationReducer = (state:INotificationState) => {
    state.value = false
    state.text = ""
}