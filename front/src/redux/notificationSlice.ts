import { notificationPayload } from './../types/types';
import { createSlice } from '@reduxjs/toolkit'

const notification = createSlice({
  name: 'notification',
  initialState: {value: false, text: "", type: "success"},
  reducers: {
    showNotification(state, action) {
      const payload:notificationPayload = action.payload  
      state.value = true
      state.text = payload.text
      state.type = payload.type
    },
    hideNotification(state) {
      state.value = false
      state.text = ""
    },
  }
})

export const { showNotification, hideNotification } = notification.actions
export default notification.reducer