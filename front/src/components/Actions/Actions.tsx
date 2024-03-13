import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import type { RootState } from '../../redux'
import { IAuthData, ISocketData } from '../../types/types';
import Table from './Table';
import { Dispatch } from '@reduxjs/toolkit';
import { useSendMessageMutation } from '../../redux/socketApi';


let socketDataCopy:ISocketData;

const Actions = () => {
    
    const dispatch:Dispatch = useDispatch()
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

export default Actions