import React from 'react'
import Item from './Item';
import Slider from './Slider';
const ItemList = ({ listProds, cat }) => {

    return (
       <>

          { cat===undefined? <Slider></Slider>:  (<h1>{cat.toUpperCase()}</h1>) }
          <div className='container my-5'> 
             <div className='d-flex justify-content-center flex-wrap'>
             {listProds.map((producto)=><Item  key={producto.name} producto={producto}/>)}
             </div>
        </div> 
        </>
    );
}

export default ItemList
