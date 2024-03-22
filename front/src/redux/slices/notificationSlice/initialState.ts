

export interface INotificationState {
    value: boolean,
    text: string,
    type: string
}

export const initialState:INotificationState = {
    value: false, 
    text: "", 
    type: "success"
}