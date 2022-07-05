import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    const precio=new Intl.NumberFormat('es-AR', {/*  style: 'currency', currency: 'ARG' */ }).format(producto?.price)
    return (
        <>

            <div className="card" style={{ width: '20rem', height: '420px', margin: '15px' }}>
                <div className='container__img ' style={{ width: '100%', height: '75%' }}>
                    <Link to={`/item/${producto.id}`} style={{ textDecoration: 'none' }} >
                        <img src={producto.img} className="card-img-top" alt={producto.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        <div className='content'> <p> <i className="bi bi-info-circle-fill"></i>View details</p> </div>
                    </Link>
                </div>
                <div className="card-body">
                    <p className='item__brand__p'>{producto.brand}</p>
                    <div className='item__price'>
                        <p className="item__price__p card-text">${precio}</p>
                    </div>
                    <p className=" item__name__p card-text">{producto.name}</p>

                </div>
            </div>

        </>
    );
}
export default Item;