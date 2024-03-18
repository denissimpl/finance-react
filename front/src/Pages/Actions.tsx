import { useSelector } from "react-redux";
import { IAuthData, IFullData } from "../types/types";
import { RootState } from "../redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Table from "../components/Actions/Table";
import sendSocket from "../services/sendSocket";


const Actions = () => {
    const userData:IAuthData = useSelector((state:RootState) => state.userData.user)
    const socketData:IFullData = useSelector((state:RootState) => state.socketData.user)
    useEffect(() => {
      sendSocket({
        method: "GET",
        login: userData.login,
        password: userData.password,
      })
    }, [])


    return (
        <Box sx={{display:"flex", justifyContent:"space-evenly", mt:2}}>
          <Table socketDataCopy={socketData} type="expenses"></Table>
          <Table socketDataCopy={socketData} type="income"></Table>
        </Box>
      );
}

export default Actions;