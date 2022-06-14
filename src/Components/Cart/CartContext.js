import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {


   const [cartList, setCarList] = useState([]);


   /* const[order, setOrder]=useState([]); */
  
            
   const addToCar = (item, quantity) => {
   
      if (isInCar(item)) {
         item.cantidad += quantity;
      }
      else {
         item.cantidad = quantity;
         setCarList([...cartList, item]);
      }
}
  

   /* console.log(order) */
   
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
   const calcDescuento=()=>{
      return calcTotal()*0.10;
  }
   const calcTotal=()=>{
      let tot=cartList.map(item=>item.price * item.cantidad)
      let result=tot.reduce(((acc,total)=>acc+total),0)
      return result 
   }

   const calcSubtotal=()=>{

      return calcTotal();
   }
 
  
   const calcItemsQty = () => {

      let qty=cartList.map(item=>item.cantidad);
       let res=qty.reduce(((acc,tot)=>acc+tot),0)
       return res;
   }

   /* estas todavia no funcionan bien */
   const increment=(id,stock)=>{
       let item=cartList.find(elem=>elem.id === id);
       if(item.cantidad<stock)
        item.cantidad+=1
        console.log(item)
   }
   const decrement=(id,stock)=>{
      let item=cartList.find(elem=>elem.id === id);
      if(item.cantidad<stock)
       item.cantidad-=1
       console.log(item)
   }
/* ⬆⬆⬆⬆ estas todavia no funcionan bien  ⬆⬆⬆⬆ */

   return <CartContext.Provider value={{
      cartList,addToCar, removeItem, clear,subtraction,addition,calcItemsQty,calcTotal
      ,calcSubtotal,increment,decrement,calcDescuento
   }}>
      {children};
   </CartContext.Provider>
}
export default CartContextProvider; 