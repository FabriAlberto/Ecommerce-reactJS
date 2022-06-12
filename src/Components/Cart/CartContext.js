import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {


   const [cartList, setCarList] = useState([]);
   const addToCar = (item, quantity) => {
      

      if (isInCar(item)) {
         item.cantidad += quantity;
      }
      else {
         item.cantidad = quantity;
         setCarList([...cartList, item]);
      }
   }

   const isInCar = (item) => {
      return cartList.some((elem) => elem.id === item.id)
   }
   const addition=(item)=>{
        alert(`un producto mas ${item.stock}`)
   }
   const subtraction=(item)=>{
      alert(`un producto menos ${item.stock}`)
   }
   const removeItem = (itemId) => {

      let deleted = cartList.filter((elemn) => elemn.id !== itemId)
      setCarList(deleted);
   }

   const clear = () => {
      setCarList([])
   }




   return <CartContext.Provider value={{
      cartList, addToCar, removeItem, clear,subtraction,addition
   }}>
      {children};
   </CartContext.Provider>
}
export default CartContextProvider; 