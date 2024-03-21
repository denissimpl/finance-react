import { createSlice } from '@reduxjs/toolkit'

import {initialState} from "./initialState";
import {updateUserDataReducer} from "./reducers/updateUserDataReducer";
import {loginReducer} from "./reducers/loginReducer";
import {exitReducer} from "./reducers/exitReducer";
import {setActionsReducer} from "./reducers/setActionsReducer";
import {setTableOptionsReducer} from "./reducers/setTableOptionsReducer";

const userDataSlice = createSlice({
  name: 'userData',
  initialState:initialState,
  reducers: {
    updateUserData: updateUserDataReducer,
    login: loginReducer,
    exit: exitReducer,
    setActions: setActionsReducer,
    setTableOptions: setTableOptionsReducer
  }
})

export const { updateUserData,
  login,
  exit,
  setActions,
  setTableOptions
} = userDataSlice.actions
export default userDataSlice.reducer