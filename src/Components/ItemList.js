import React from 'react'
import Item from './Item';

const ItemList = ({ listProds }) => {
    return (
        <div className='container'>
            <h3>Productos</h3>

             <div className='d-flex justify-content-center flex-wrap'>
             {listProds.map((producto)=><Item  key={producto.id} producto={producto}/>)}
             </div>
        </div> 
    );
}

export default ItemList
