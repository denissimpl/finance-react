export interface IUserAction{
    name: string,
    amount: string,
    date: string
}

export interface ITableAction extends IUserAction {
    id: number
}

export interface IUserActions {
    income: IUserAction[],
    expenses: IUserAction[]
}

export interface ITableActions {
    income: ITableAction[],
    expenses: ITableAction[]
}




export interface INavLink {
    name:string,
    to:string
}

export interface IFullData {
    _id?: string,
    login: string,
    password?: string,
    income: ITableAction[],
    expenses: ITableAction[],
}

export interface IFullDataResponse {
    data: IFullData
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
    text: string,
    type?: "success" | "info" | "warning" | "error"
}


export interface IRoute{
    path: string,
    element: () => JSX.Element
}

export interface IRoutes {
    auth: IRoute[],
    guest: IRoute[]
}






