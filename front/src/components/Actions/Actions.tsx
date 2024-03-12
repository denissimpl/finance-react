import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { updateSocketData } from '../../redux/socketDataSlice';
import { useEffect } from 'react';
import type { RootState } from '../../redux'
import { IAuthData, ISocketData } from '../../types/types';
import Table from './Table';
import setSocket from './setSocket';
import { Dispatch } from '@reduxjs/toolkit';




let socket:WebSocket;
let socketDataCopy:ISocketData;

const Actions = () => {
    
    const dispatch:Dispatch = useDispatch()
    const userData:IAuthData = useSelector((state:RootState) => state.userData.user)
    const socketData:ISocketData = useSelector((state:RootState) => state.socketData.user)
    socketDataCopy = socketData
    useEffect(() => {
      socket = new WebSocket("ws://localhost:5555");
      setSocket(socket, userData, dispatch, updateSocketData);
    }, [])


    useEffect(() => {
      
      if (JSON.stringify(socketData) !== JSON.stringify(socketDataCopy)) {
        socketDataCopy = socketData
      }
    }, [socketData])
    
    return (
      <Box sx={{display:"flex", justifyContent:"space-evenly", mt:2}}>
        <Table socketDataCopy={socketDataCopy} type="expenses" socket={socket}></Table>
        <Table socketDataCopy={socketDataCopy} type="income" socket={socket}></Table>
      </Box>
    );
}

export default Actions