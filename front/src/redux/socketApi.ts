import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '.';
import { ISocketData, ITableActions } from '../types/types';
import { updateSocketData } from './socketDataSlice';

const socket = new WebSocket('ws://localhost:5555');

export const socketApi = createApi({
  reducerPath: 'socketApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => 'getMessage',
    }),
    sendMessage: builder.mutation({
      // Определяем функцию, которая будет отправлять сообщение на сервер
      query: (message) => {
        // Отправляем сообщение через сокет
        socket.send(JSON.stringify(message));
        return "success"
      },
      // Необязательный колбэк-функция, которая вызывается после успешной отправки сообщения
      onQueryStarted: () => {
        console.log('Sending message...');
      },
    }),
  }),
});

socket.onopen = () => {
  console.log('connected to socket');
};

socket.onmessage = (event) => {
    const messageData:ISocketData = JSON.parse(event.data)
    
    if (messageData?.login === store.getState().userData.user.login) {
        console.log("updated");
        
        let newData:ITableActions = {income: [], expenses: []};
        for (const [id, obj] of messageData.income.entries()) {
          newData.income.push({...obj, id:id+1})
        }
        for (const [id, obj] of messageData.expenses.entries()) {
          newData.expenses.push({...obj, id:id+1})
        }
        store.dispatch(updateSocketData({...messageData,...newData}))
    }
}

export const { useGetMessageQuery, useSendMessageMutation } = socketApi;