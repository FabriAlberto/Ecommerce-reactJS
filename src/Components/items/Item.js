import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <>
        
        <div className="card" style={{width:'20rem', margin:'15px'}}>
            <Link to={`/item/${producto.id}`} style={{textDecoration:'none'}} >
            <img src={producto.img} className="card-img-top" alt={producto.name} style={{width:'100%'}}/>
            <div className='content'><p><i className="bi bi-info-circle-fill"></i>View details</p></div>
            </Link>
            <div className="card-body">
            <p className="card-text">{producto.name}</p>
            <p className="card-text">${producto.price}</p>
            </div>
        </div>
        
        </>
    );
}
export default Item;