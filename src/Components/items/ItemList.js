import React from 'react'
import Item from './Item';

const ItemList = ({ listProds, cat }) => {

    return (
        <div className='container'>
          { cat===undefined? <h1>PRODUCTOS</h1>: <h1>{cat.toUpperCase()}</h1> }

             <div className='d-flex justify-content-center flex-wrap'>
             {listProds.map((producto)=><Item  key={producto.id} producto={producto}/>)}
             </div>
        </div> 
    );
}

export default ItemList
