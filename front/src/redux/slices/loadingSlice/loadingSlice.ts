import { startLoadingReducer } from './reducers/startLoadingReducer';
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { stopLoadingReducer } from './reducers/stopLoadingReducer';

const loading = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    startLoading:startLoadingReducer,
    stopLoading:stopLoadingReducer
  }
})

export const { startLoading, stopLoading } = loading.actions
export default loading.reducer