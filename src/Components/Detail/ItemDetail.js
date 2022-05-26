import React from 'react'
import ItemCount from '../ItemCount'
const ItemDetail = ({ Item }) => {
    const { img, name, description, price, stock } = Item
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
                    <ItemCount stock={stock} />
                </div>
            </div>
            <div>
                <p> pares disponibles {stock}</p>
            </div>
        </>
    )
}

export default ItemDetail