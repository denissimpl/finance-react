
export interface IUserAction{
    name: string,
    amount: string,
    date: string
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
    callback: Function,
    isLogin: boolean
}

export interface INavLink {
    name:string,
    to:string
}

export interface IUser {
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
    

