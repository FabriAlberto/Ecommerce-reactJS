import { useContext } from "react"
import { CartContext } from "./CartContext"

function Cart() {
  const test= useContext(CartContext);
  return (
    <>
      <h2>YOU CART</h2>
       {
       test.cartList.length===0? <p>You cart is empty</p> 
       : test.cartList.map(elem=><p>{elem.name}</p>)
       }
    </>
  )
}

export default Cart