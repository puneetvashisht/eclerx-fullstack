// 2. useSelector an useDispatch


import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addProduct,  deleteProduct,  fetchProducts } from '../store/product-reducer'


function ViewProducts() {

  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)


  const products = useSelector((state) => {
    console.log(state)
      return state.pr.products
    })

    const dispatch = useDispatch();


    useEffect(() => {
      console.log('Init ... View Products .... ');
      dispatch(fetchProducts())
    }, [dispatch])


  let productsList = products.map((p, i)=>
  {
  return (
    <tr key={p.id}>
    <th scope="row">{p.id}</th>
    <td>{p.name}</td>
    <td>{p.price}</td>
    <td><button onClick={()=>dispatch(deleteProduct(p.id))} className='btn btn-danger'>  X </button></td>
    </tr>
  )
  })
  

  return (
    <>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      {productsList}
    </tbody>
  </table>

  <button onClick={()=>dispatch(addProduct({ name: 'iPad', price: 20000}))} className='btn btn-primary'>  Add Ipad </button>
  </>
  )
}

export default ViewProducts;
// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     products: state.productsReducer.products
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteProduct: (id) =>  dispatch(actions.deleteProduct(id))
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts)