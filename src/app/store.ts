import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import menuSlice from "../features/menu/menuSlice"

export const store = configureStore({
  reducer: {
    food: menuSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
