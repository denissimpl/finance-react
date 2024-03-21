import { store } from "../redux"
import { socketApi } from "../redux/api/socketApi"
import { IFullData } from "../types/types"


export interface ISocketArgData {
    login: string,
    password?: string,
    name?: string,
    amount?: string,
    date?:string
}

export interface ISocketArg{
    method: string,
    type?: string,
    data: ISocketArgData | IFullData,
}


const sendSocket = (socketArg:ISocketArg) => {
    store.dispatch(socketApi.endpoints.sendMessage.initiate(socketArg))
}






export default sendSocket