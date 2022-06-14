import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import Badge from "./Badge";

const CartWidget = () => {
  const test= useContext(CartContext)
   console.log(test.calcItemsQty())
  return (
    <>
      <button class=" carrito bi bi-cart2  position-relative">
         
          { test.calcItemsQty()>0? <Badge cont={test.calcItemsQty()}></Badge>:console.log("nada")}
      
      </button>
    </>
  );
}
export default CartWidget;