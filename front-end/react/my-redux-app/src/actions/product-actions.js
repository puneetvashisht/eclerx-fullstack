export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export const fetchProducts = () => {
    // http communication
    return {type: FETCH_PRODUCTS}
}

export const deleteProduct = (id) => {
    // http communication
    return {type: DELETE_PRODUCT, payload: {id}} 
}


