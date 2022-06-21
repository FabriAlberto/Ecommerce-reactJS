import React  from 'react'
import { CartContext } from './CartContext'
import { useContext} from 'react'

const ProductData = ({data}) => {
  const del=useContext(CartContext);
 
 
  return (
    <tr>
              <th scope="row"><img src={data.img} alt={data.name} style={{ width: '80px' }}></img></th>
              <td> {data.name}</td>
              <td>${data.price}</td>
              <td> <button className="btnAmount" onClick={()=>del.decrement(data.id, data.stock)} > - </button > {data.cantidad} <button onClick={()=>del.increment(data.id, data.stock)}   className="btnAmount">+</button> </td>
              <td> {data.price * data.cantidad} </td>
              <td><button onClick={()=> del.removeItem(data.id)} className='delete'><i className="bi bi-trash3-fill "></i></button></td>
     </tr>
  )
}

export default ProductData