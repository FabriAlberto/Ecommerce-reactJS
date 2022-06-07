import { createContext, useState } from "react";

export const CartContext= createContext();

const CartContextProvider=({children})=>{
    const [cartList, setCarList] = useState([]);
    const addToCar=(item)=>{
       setCarList([
           ...cartList,
           item ]);
    }
    return  <CartContext.Provider value={{cartList ,addToCar}}>
                  {children};
            </CartContext.Provider>
}
export default CartContextProvider; 