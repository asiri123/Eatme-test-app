import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchMenuItems } from "./menuAPI"

export interface FoodDetail {
  key: number
  mainText: string
  description: string
  price: number
}

export interface MenuItem {
  category: string
  items: Array<FoodDetail>
}

export interface MenuState {
  menuItemList: MenuItem[]
  status: "idle" | "loading" | "failed"
}

const initialState: MenuState = {
  menuItemList: [],
  status: "idle",
}

export const fetchMenuItemList = createAsyncThunk("get/menuItem", async () => {
  const response: MenuItem[] = await fetchMenuItems()

  return response
})

export const menuItemSlice = createSlice({
  name: "foodItems",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItemList.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchMenuItemList.fulfilled, (state, action) => {
        state.status = "idle"
        state.menuItemList = action.payload
      })
      .addCase(fetchMenuItemList.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const {} = menuItemSlice.actions

export const selectMenuItemList = (state: RootState) => state.food.menuItemList

export default menuItemSlice.reducer
