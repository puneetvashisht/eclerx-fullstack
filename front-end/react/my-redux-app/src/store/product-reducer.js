// 1. create Slice -- auto create actions with reducer

import {createSlice} from '@reduxjs/toolkit'


const productReducer = createSlice({
  name: "products",
  initialState: {products: [
    {id: 1, name: 'iPhone', price: 10000}
  ]},
  reducers: {
    FETCH_PRODUCTS(state, action){
      return {products : state.products};
    },
    ADD_PRODUCT(state, action){
      let newProducts = [...state.products, action.payload]
      return {products: newProducts};
    },
    DELETE_PRODUCT(state,action){
      let newProducts = state.products.filter(e => e.id != action.payload.id)
      return {products: newProducts};
    }
  }
})

export const {FETCH_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} = productReducer.actions
export default productReducer.reducer