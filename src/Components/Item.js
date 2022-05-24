import React from 'react'
import ItemCount from './ItemCount';

const Item = ({producto}) => {
    return (
        <>
        <div className="card" style={{width:'20rem', margin:'15px'}}>
            <img src={producto.img} className="card-img-top" alt={producto.name} style={{width:'100%'}}/>
            <div className="card-body">
            <p className="card-text">{producto.name}</p>
            <p className="card-text">{producto.description}</p>
            <p className="card-text">${producto.price}</p>
            </div>
            <ItemCount stock={producto.stock}></ItemCount>
        </div>
        </>
    );
}
export default Item;