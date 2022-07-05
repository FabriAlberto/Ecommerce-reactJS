import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import Badge from "./Badge";

const CartWidget = () => {
  const test= useContext(CartContext)
  return (
    <>
      <button className=" carrito bi bi-cart2  position-relative">
         
          { test.calcItemsQty()>0 && <Badge cont={test.calcItemsQty()}></Badge>}
      
      </button>
    </>
  );
}
export default CartWidget;