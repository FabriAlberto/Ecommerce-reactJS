import React, { useContext, useState, } from 'react'
import { CartContext } from './CartContext'
/* import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore"; */
/* import db from "../../mocks/FirebaseConfig" */
import { toast, Toaster } from 'react-hot-toast';


const Order = ({setComprar}) => {
    let tot = useContext(CartContext)


    return (
        <>
            <div className='order bg-dark text-light'>
                <h2> ORDER </h2>
                <div className='d-flex  order__total'> <p> Subtotal </p> <p> ${tot.calcSubtotal()} </p></div>
                <div className='d-flex order__total'> <p> Discount </p> <p> -${tot.calcDescuento()}</p></div>
                <div className='d-flex order__total'> <p> Total: </p> <p>${tot.calcTotal() - tot.calcDescuento()} </p></div>
                <button className='checkout__order ' onClick={()=> setComprar(true)}> CHECKOUT</button>
               
            </div>
            <Toaster toastOptions={{
                style: {
                    border: '1px solid #377DD3',
                    padding: '16px',
                    color: '#377DD3',
                },
                iconTheme: {
                    primary: '#377DD3',
                    secondary: '#fff',
                },
            }} />
      
        </>
    )
}

export default Order