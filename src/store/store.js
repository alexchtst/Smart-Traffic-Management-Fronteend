import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from "./features/exampleSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      examle: exampleReducer
    },
  })
}
