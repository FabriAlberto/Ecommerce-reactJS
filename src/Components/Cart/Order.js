import React, { useContext, } from 'react'
import { CartContext } from './CartContext'

const Order = () => {
     let tot=useContext(CartContext)
       
    return (
        <>
            <div className='order'>
                <h2> Order </h2>
                <div className='d-flex  order__total'> <p> Sub total </p> <p> {tot.calcSubtotal()} </p></div>
                <div className='d-flex order__total'> <p> descuento </p> <p> {tot.calcDescuento()}</p></div>
                <div className='d-flex order__total'> <p> Total: </p> <p>{tot.calcTotal() - tot.calcDescuento()} </p></div>
                <button>CHECKOUT</button>
            </div>

        </>
    )
}

export default Order