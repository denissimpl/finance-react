import { Slice, createSlice } from '@reduxjs/toolkit'

const logged:Slice = createSlice({
  name: 'logged',
  initialState: {value: false},
  reducers: {
    login(state) {
      state.value = true
    },
    exit(state) {
      state.value = false
    },
  }
})

export const { login, exit } = logged.actions
export default logged.reducer