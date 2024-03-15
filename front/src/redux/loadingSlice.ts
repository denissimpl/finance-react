import { Slice, createSlice } from '@reduxjs/toolkit'

const loading:Slice = createSlice({
  name: 'loading',
  initialState: {value: false},
  reducers: {
    startLoading(state) {
      state.value = true
    },
    stopLoading(state) {
      state.value = false
    },
  }
})

export const { startLoading, stopLoading } = loading.actions
export default loading.reducer