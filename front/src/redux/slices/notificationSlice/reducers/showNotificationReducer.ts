import { notificationPayload } from './../../../../types/types';
import { INotificationState } from "../initialState"

interface NotificationAction {
    payload: notificationPayload
}

export const showNotificationReducer = (state:INotificationState, action:NotificationAction) => {
    const payload:notificationPayload = action.payload  
    state.value = true
    state.text = payload.text
    state.type = payload.type || "success"
}