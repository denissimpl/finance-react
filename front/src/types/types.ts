
export interface IUserAction{
    name: string,
    amount: string,
    date: string
}

export interface IUserActions {
    income: IUserAction[],
    expenses: IUserAction[]
}

export interface IButtonWrapperProps{
    text: string
    callback?: Function
}

export interface IFormProps{
    text: {
        header: string,
        button: string
    },
    isLogin: boolean
}

export interface INavLink {
    name:string,
    to:string
}

export interface ISocketData {
    _id: string,
    login: string,
    password: string,
    income: IUserAction[],
    expenses: IUserAction[],
}

export interface IAuthRequest {
    login: string,
    password: string,
}

export interface IAuthData {
    login?: string,
    password?: string,
    status: boolean,
    reason?:string
}

export interface IAuthResponse {
    data: IAuthData
}

export interface notificationPayload{
    value: boolean,
    text: string,
    type: "success" | "info" | "warning" | "error"
}

    
export interface notification{
    text: string,
    type: "success" | "info" | "warning" | "error",
    sx?: object
}
    
export interface ITableProps{
    socketDataCopy: ISocketData,
    socket: WebSocket,
    type: string
}

export interface IToolbarProps{
    
}