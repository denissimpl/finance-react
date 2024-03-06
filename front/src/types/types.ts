export interface IUserAction{
    name: string,
    amount: string,
    date: string
}

export interface ButtonWrapperProps{
    text: string,
    callback?: Function
}


export interface IUser {
    _id: string,
    name: string,
    password: string,
    income: IUserAction[],
    expenses: IUserAction[],
}

export interface IPostUser {
    login: string,
    password: string
}

export interface loginResponse {
    status: boolean,
    login: string,
    password: string
}
