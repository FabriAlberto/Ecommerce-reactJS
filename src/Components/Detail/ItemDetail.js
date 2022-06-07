import React from 'react'
import ItemCount from '../items/ItemCount'
import { useContext ,useState} from 'react';
import { CartContext } from "../Cart/CartContext";
import ItemGoToCart from './ItemGoToCart';
import { Link } from 'react-router-dom';
const ItemDetail = ({Item}) => {
    const { img, name, description, price, stock } = Item
    const[cont, setCont] = useState(1);
    const[OnAdd, setOnAdd]= useState(false);
    const add = useContext(CartContext);
    const onAdd=()=>{ cont>0? (alert( `Elementos agregados ${cont} `,add.addToCar(Item) ,setOnAdd(true)))
                            
    : alert("no agrego elementos");
}

   
    return (
        <>
            <div className='container d-flex align-content-center'>
                <div className=' col-7' >
                    <img src={img}  style={{width:'90%' , height:'80vh', objectFit:'cover'}} alt={name} />
                </div>
                <div className=' col-5 d-flex  flex-column justify-content-center '>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>${price}</p>
                    {
                    OnAdd===false?<ItemCount stock={stock} Item={Item} onAdd={onAdd} cont={cont} setCont={setCont}/> : <Link to={"/cart"} > <ItemGoToCart/></Link>
                    }
                </div>
            </div>
            <div>
                <p> pares disponibles {stock}</p>
            </div>
        </>
    )
}

export default ItemDetail