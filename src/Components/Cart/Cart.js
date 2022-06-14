import { useContext } from "react"
import { CartContext } from "./CartContext"
import ProductsCart from "./ProductsCart";
import { Link } from "react-router-dom";

const Cart = () => {

  const test = useContext(CartContext);
  return (
    <>
      <div className="container">
        <h2>YOU CART</h2>
         <Link to={"/"} ><button className="continue__shoping"> CONTINUE SHOPING</button></Link>
        {
          test.cartList.length === 0 ?
           <p>You cart is empty</p>
            :  
            (<ProductsCart  product={test.cartList}></ProductsCart> )
  
        }
      </div>
    </>
  )
}

export default Cart