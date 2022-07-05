import React from 'react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from "../Cart/CartContext";
import ItemGoToCart from './ItemGoToCart';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
const ItemDetail = ({ Item }) => {
    const { img, name, description, price, stock,category } = Item
    const [cont, setCont] = useState(0);
    const [Buy, setBuy] = useState(false);
    const add = useContext(CartContext);
    const onAdd = () => {
        let res = "";
        if (cont > 1) { res = "productos" }
        else { res = "producto" };
        cont > 0 ?
            (

                toast.success(`Agregaste ${cont} ${res} a tu 🛒 `,
                    add.addToCar(Item, cont),
                    setBuy(true))
            )
            :
            toast.error("Aun no ha agregado elementos a tu 🛒 ");
    }
    return (
        <>
            <div className='container container__itemDetail d-flex '>
                <div className=' col-7 d-flex' >
                    <div className='col-3'>
                        <ul className='ul__sub__img'>
                            <li className='container__sub__img'><img className='sub__img' src={img} alt="zapatillas-anuncio"></img></li>
                            <li className='container__sub__img'><img className='sub__img' src={Item.imgSub?.img1} alt="zapatillas-anuncio"></img></li>
                            <li className='container__sub__img'><img className='sub__img' src={Item.imgSub?.img2} alt="zapatillas-anuncio"></img></li>
                            <li className='container__sub__img'><img className='sub__img' src={Item.imgSub?.img3} alt="zapatillas-anuncio"></img></li>
                        </ul>
                    </div>
                    <div className='col-9 img__detail'>
                        <img src={img} style={{ width: '90%', height: '80%', objectFit: 'contain' }} alt={name} />
                    </div>

                </div>
                <div className='contenedor__detail col-5 d-flex  flex-column my-3 justify-content-center p-3 rounded'>
                    <p className='category'>{category?.toUpperCase()}</p>
                    <div className='my-3'>
                    <p className='name__detail'>{name}</p>
                    <p className=''>{description?.toLowerCase()}</p>
                    </div>
                    <div>
                    <p> Stock: {stock} Unidades</p>
                    <p className='price__detail'>${price}</p>
                    </div>
                    {
                        Buy === false ? <ItemCount stock={stock} Item={Item} onAdd={onAdd} cont={cont} setCont={setCont} />
                            : <Link to={"/cart"}> <ItemGoToCart /></Link>
                    }
                    <Toaster toastOptions={{
                        style: {
                            border: '1px solid #377DD3',
                            padding: '16px',
                            color: '#377DD3',
                        },
                        iconTheme: {
                            primary: '#377DD3',
                            secondary: '#fff',
                        },
                    }} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail