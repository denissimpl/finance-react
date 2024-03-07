import { createSlice } from '@reduxjs/toolkit'

const notification = createSlice({
  name: 'notification',
  initialState: {value: false, text: "", type: ""},
  reducers: {
    showNotification(state, action) {
      state.value = true
      state.text = action.payload.text
      state.type = action.payload.type
    },
    hideNotification(state) {
      state.value = false
      state.text = ""
    },
  }
})

export const { showNotification, hideNotification } = notification.actions
export default notification.reducer