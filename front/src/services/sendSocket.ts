import { store } from "../redux"
import { socketApi } from "../redux/api/socketApi"
import { IFullData } from "../types/types"

export interface ISocketArg{
    method: string,
    login?: string | undefined,
    password?: string  | undefined,
    data?: IFullData,
    type?: string
}

const sendSocket = (socketArg:ISocketArg) => {
    store.dispatch(socketApi.endpoints.sendMessage.initiate(socketArg))
}






export default sendSocket