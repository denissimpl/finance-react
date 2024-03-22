import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState';
import { showNotificationReducer } from './reducers/showNotificationReducer';
import { hideNotificationReducer } from './reducers/hideNotificationReducer';

const notification = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    showNotification: showNotificationReducer,
    hideNotification: hideNotificationReducer
  }
})

export const { showNotification, hideNotification } = notification.actions
export default notification.reducer