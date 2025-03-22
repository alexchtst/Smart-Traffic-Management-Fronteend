import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from "./features/exampleSlice"
import guardpostReducer from "./features/guardpostSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      example: exampleReducer,
      guardpost: guardpostReducer,
    },
  })
}
