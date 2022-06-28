import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {


   const [cartList, setCarList] = useState([]);
 

   /* const[order, setOrder]=useState([]); */

/* agrega productos al carrito */
   const addToCar = (item, quantity) => {
  /* analiza si el item esta en carrito */
      if (isInCar(item)) {
         /* si esta crea un nuevo item con una nueva cantidad   */
         let itemNew=inCar(item);
         itemNew.cantidad += quantity;
         setCarList([...cartList])
      }
      else {
         item.cantidad = quantity;
         setCarList([...cartList, item]);
      }

   }

/* Function que analiza si un item ingresado esta o no dentro del carrito */
   const isInCar = (item) => {
      return cartList.some((elem) => elem.id === item.id)
   }

   /* retorna el array con el objeto que coincida con el id  */
   const inCar=(item)=>{
       return cartList.find(elem=>elem.id===item.id)

   }
   const addition = (item) => {
      alert(`un producto mas ${item.stock}`)
   }
   const subtraction = (item) => {
      alert(`un producto menos ${item.stock}`)
   }
   const removeItem = (itemId) => {

      let deleted = cartList.filter((elemn) => elemn.id !== itemId)

      setCarList(deleted);

   }

   const clear = () => {
      setCarList([])
   }
   const calcDescuento = () => {
      return Math.round(calcTotal() * 0.10);
   }
   const calcTotal = () => {
      let tot = cartList.map(item => item.price * item.cantidad)
      let result = tot.reduce(((acc, total) => acc + total), 0)
      return result
   }

   const calcSubtotal = () => {

      return calcTotal();
   }


   const calcItemsQty = () => {
      let qty = cartList.map(item => item.cantidad);
      let res = qty.reduce(((acc, tot) => acc + tot), 0)
      return res;

   }
   

   /* estas todavia no funcionan bien */
   const increment = (id, stock) => {
      let item = cartList.find(elem => elem.id === id);
      if (item.cantidad < stock)
         item.cantidad += 1
      console.log(item)
      setCarList([...cartList])
   }
   const decrement = (id) => {
      let item = cartList.find(elem => elem.id === id);
      if (item.cantidad>1)
         item.cantidad -= 1
      console.log(item)
      setCarList([...cartList])
   }
   /* ⬆⬆⬆⬆ estas todavia no funcionan bien  ⬆⬆⬆⬆ */

   return <CartContext.Provider value={{
      cartList, addToCar, removeItem, clear, subtraction, addition, calcItemsQty, calcTotal
      , calcSubtotal, increment, decrement, calcDescuento
   }}>
      {children};
   </CartContext.Provider>
}
export default CartContextProvider; 