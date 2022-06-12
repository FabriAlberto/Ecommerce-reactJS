import React  from 'react'
import { CartContext } from './CartContext'
import { useContext,useState } from 'react'

const ProductData = ({data}) => {
  const {price, cantidad}=data;
  const del=useContext(CartContext);
  const [amount,setAmount]=useState(data.cantidad);
  const [total,setTotal]=useState(price*cantidad)
  return (
    <tr>
              <th scope="row"><img src={data.img} alt={data.name} style={{ width: '80px' }}></img></th>
              <td> {data.name}</td>
              <td>${data.price}</td>
              <td> <button className="btnAmount" onClick={()=>del.subtraction(data)} > - </button > {amount} <button onClick={()=>del.addition(data)}   className="btnAmount">+</button> </td>
              <td>${total}</td>
              <button onClick={()=> del.removeItem(data.id)} className='delete'><i class="bi bi-trash3-fill "></i></button>
     </tr>
  )
}

export default ProductData