import { useSelector } from "react-redux";
import { IAuthData, ISocketData } from "../../types/types";
import { RootState } from "../../redux";
import { useSendMessageMutation } from "../../redux/socketApi";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Table from "../Actions/Table";


let socketDataCopy:ISocketData;

const Actions = () => {
    const userData:IAuthData = useSelector((state:RootState) => state.userData.user)
    const socketData:ISocketData = useSelector((state:RootState) => state.socketData.user)
    socketDataCopy = socketData
    const [sendSocket, {error}] = useSendMessageMutation()
    useEffect(() => {
        sendSocket({
          method: "GET",
          login: userData.login,
          password: userData.password,
        })
        
      }, [])

    useEffect(() => {
        socketDataCopy = socketData
    }, [socketData])

    return (
        <Box sx={{display:"flex", justifyContent:"space-evenly", mt:2}}>
          <Table socketDataCopy={socketDataCopy} type="expenses"></Table>
          <Table socketDataCopy={socketDataCopy} type="income"></Table>
        </Box>
      );
}

export default Actions;