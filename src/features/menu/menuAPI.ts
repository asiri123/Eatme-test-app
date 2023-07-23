// A mock function to mimic making an async request for data

import ProductItem from "../../utils/ProductItem.json"
import {MenuItem} from "./menuSlice"

export function fetchMenuItems()  {
  return ProductItem as MenuItem[]
}
