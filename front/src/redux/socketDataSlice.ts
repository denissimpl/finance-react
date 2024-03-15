import { Slice, createSlice } from '@reduxjs/toolkit'
import { IFullData } from '../types/types'

const socketDataSlice = createSlice({
  name: 'socketData',
  initialState:{
    user: {
        _id: "",
        login: "",
        password: "",
        income: [],
        expenses: [],

    }
  },
  reducers: {
    updateSocketData: (state, action) => {
      const payload:IFullData = action.payload
      state.user = action.payload
    }
  }
})

export const { updateSocketData } = socketDataSlice.actions
export default socketDataSlice.reducer