import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import ProductsCart from "./ProductsCart";
import { Link } from "react-router-dom";
import Order from "./Order";
import Formulario from "./Formulario";
const Cart = () => {
  const [comprar, setComprar]=useState(false)
  const test = useContext(CartContext);
  return (
    <>
    <div className="cart_container">
     { !comprar?
      <div className="container ">
        <h2>YOU CART</h2>
        <Link to={"/"} ><button className="continue__shoping"> CONTINUE SHOPING</button></Link>
        {
          test.cartList.length === 0 ?
            <p>You cart is empty</p>
            :
            (<div className=" container__products__car d-flex flex-md-row flex-column  col-12 ">
              <div className="col-md-8 col-12" >
                <ProductsCart  product={test.cartList} />
              </div>
              <div className=" container__order col-md-4 col-12 " >
                <Order setComprar={setComprar}></Order>
              </div>
            </div>)

        }
      </div>
      :
      <Formulario setComprar={setComprar}></Formulario>
      }  
      </div>
    </>
  )
}

export default Cart