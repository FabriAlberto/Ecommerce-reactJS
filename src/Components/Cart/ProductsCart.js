import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import ProductData from './ProductData'

const ProductsCart = ({ product }) => {

  const cle = useContext(CartContext)

  return (
    <>
      <div className='cart d-flex '>
        <div className='d-flex col-md-11' >
          <table className="table" style={{ width: '100%' }}>
            <thead >
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

                <ProductData key={elem.id} data={elem}></ProductData>

              )}
            </tbody>


          </table>
          <button className="continue__shoping all" onClick={cle.clear} style={{ height: '30px'}}>DELETE ALL</button>
        </div>
 
      </div>
    </>
  )
}

export default ProductsCart