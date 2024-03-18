import { Slice, createSlice } from '@reduxjs/toolkit'
import { IAuthData } from '../../types/types'

const userDataSlice = createSlice({
  name: 'userData',
  initialState:{
    user: {
      login: "",
      password: "",
      status: false
    }
  },
  reducers: {
    updateUserData: (state, action) => {
      const payload:IAuthData = action.payload
      state.user = action.payload
    }
  }
})

export const { updateUserData } = userDataSlice.actions
export default userDataSlice.reducer