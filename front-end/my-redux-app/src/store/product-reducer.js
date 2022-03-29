// 1. create Slice -- auto create actions with reducer

import {createSlice} from '@reduxjs/toolkit'


const productReducer = createSlice({
  name: "products",
  initialState: {products: [
  ]},
  reducers: {
    FETCH_PRODUCTS(state, action){
      return {products : action.payload};
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



const baseUrl = 'http://localhost:8000/products/'

export const addProduct = (employee) => {
    return async(dispatch) => {
       
        let response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        let data = await response.json();
        console.log(data);
        dispatch(ADD_PRODUCT(employee));

    }
}


export const fetchProducts = () => {
    return async(dispatch) => {
        let response = await fetch(baseUrl);
        let data = await response.json();
        dispatch(FETCH_PRODUCTS(data));

    }
}

export const deleteProduct = (id) => {
    // http communication
    console.log(id);
    return dispatch=> {
        fetch(baseUrl + id, {
            method: 'DELETE'
        })
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch(DELETE_PRODUCT({id}));
          })
          .catch(err => console.log(err));
    }
    // return {type: DELETE_EMPLOYEE, payload: {id}} 
}