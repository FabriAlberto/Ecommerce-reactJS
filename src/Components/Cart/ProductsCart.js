import React, { useContext }  from 'react'
import { CartContext } from './CartContext'

import ProductData from './ProductData'

const ProductsCart = ({ product }) => {
   
   const cle=useContext(CartContext)
 
  return (
    <>
       <div className='d-flex '>
       

      <table className="table" style={{ width: '70%' }}> 
        <thead className>
          <tr>
            <th scope="col">Product</th>
            <th scope="col"> </th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {product.map(elem =>

            <ProductData data={elem}></ProductData>
            
          )}
        </tbody>
        

      </table>
      <button onClick={cle.clear} style={{height:'30px'}}>DELETE ALL</button>
      </div> 

    </>
  )
}

export default ProductsCart