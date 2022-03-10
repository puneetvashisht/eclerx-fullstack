import * as actions from '../actions/product-actions'


let initialState = {
    products : [
        {id: 1, name: 'iPhone', price: 10000}
    ]
  }
  
  
  
// Create a reducer -- change the state
// immutable changes
const reducer = (state = initialState, action)=>{
    console.log('In reducer: ', action);
    switch(action.type){
        case actions.FETCH_PRODUCTS: return state.products;
  
        // only immutable changes are allowed
        case actions.ADD_PRODUCT: let newProducts = [...state.products, action.payload]
                              return {products: newProducts};
  
        case actions.DELETE_PRODUCT: let filteredProducts = state.products.filter(e => e.id != action.payload.id)
                              return {products: filteredProducts};
        default: return state;
    }
  }

export default reducer;