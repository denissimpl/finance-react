import { createSlice } from '@reduxjs/toolkit'
import { IAuthData } from '../types/types'

const userDataSlice = createSlice({
  name: 'userData',
  initialState:{
    user: {}
  },
  reducers: {
    updateData: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { updateData } = userDataSlice.actions
export default userDataSlice.reducer