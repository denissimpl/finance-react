import { ActionCreator, Dispatch } from "@reduxjs/toolkit"
import { IAuthData, ISocketData } from "../../types/types"

const setSocket = (socket: WebSocket, userData:IAuthData, dispatch:Dispatch, updateSocketData:ActionCreator) => {
    socket.onopen = function (e) {
        socket.send(JSON.stringify({
          type: "GET",
          login: userData.login,
          password: userData.password,
        }))
      }
  
    socket.onmessage = function (message) {
        const messageData:ISocketData = JSON.parse(message.data)
        if (messageData.login === userData.login) {
            dispatch(updateSocketData(messageData))
        }
    }
}

export default setSocket