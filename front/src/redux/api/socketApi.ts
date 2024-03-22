import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '..';
import type {IFullData, ITableActions} from '../../types/types';
import { startLoading, stopLoading } from '../slices/loadingSlice/loadingSlice';
import {setActions} from "../slices/userDataSlice/userDataSlice";

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
        store.dispatch(startLoading())
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

    store.dispatch(stopLoading())
    const messageData:IFullData = JSON.parse(event.data)
    
    if (messageData?.login === store.getState().userData.user.login) {
        
        let newData:ITableActions = {income: [], expenses: []};
        if (messageData.income.entries()) {
          for (const [id, obj] of messageData.income.entries()) {
            newData.income.push({...obj, id:id+1})
          }
        }
        if (messageData.expenses.entries()) {
          for (const [id, obj] of messageData.expenses.entries()) {
            newData.expenses.push({...obj, id:id+1})
          }
        }
        store.dispatch(setActions(newData))
    }
}

export const { useGetMessageQuery, useSendMessageMutation } = socketApi;