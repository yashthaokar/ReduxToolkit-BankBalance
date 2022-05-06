import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './showSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})