import { configureStore } from '@reduxjs/toolkit'
import  genderSlice from './genederSlice'
export const store = configureStore({
  reducer: {
    gender:genderSlice
  },
})
