
import { GridApiCommunity } from "@mui/x-data-grid/internals"
import { EChartsOption, SetOptionOpts } from "echarts"
import { CSSProperties, MutableRefObject } from "react"

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

export interface IFullData {
    _id: string,
    login: string,
    password: string,
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
    socketDataCopy: IFullData,
    type: string
}




export interface IRoute{
    path: string,
    element: () => JSX.Element
}

export interface IRoutes {
    auth: IRoute[],
    guest: IRoute[]
}

export interface IToolbarProps{
    type: string
    onDeleteClick: () => void
}

export interface IModalProps {
    open: boolean,
    handleClose: () => void,
    type: string
}

export interface ReactEChartsProps {
    option: EChartsOption;
    style?: CSSProperties;
    settings?: SetOptionOpts;
    loading?: boolean;
  }

export interface IIncomeOptionsMonthsValue {
    date:number,
    amount:number
} 