import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/product-actions'

function ViewProducts(props) {

  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)


  const deleteProduct = (id) => {
    props.onDeleteProduct(id);
  }

  let productsList = props.products.map((p, i)=>
  {
  return (
    <tr key={p.id}>
    <th scope="row">{p.id}</th>
    <td>{p.name}</td>
    <td>{p.price}</td>
    <td><button onClick={()=>deleteProduct(p.id)} className='btn btn-danger'>  X </button></td>
    </tr>
  )
  })
  

  return (
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
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state.productsReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (id) =>  dispatch(actions.deleteProduct(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts)