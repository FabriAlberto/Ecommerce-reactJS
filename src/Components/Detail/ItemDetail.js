import React from 'react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from "../Cart/CartContext";
import ItemGoToCart from './ItemGoToCart';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
const ItemDetail = ({ Item }) => {
    const { img, name, description, price, stock } = Item
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
            <div className='container d-flex align-content-center'>
                <div className=' col-7' >
                    <img src={img} style={{ width: '90%', height: '80vh', objectFit: 'cover' }} alt={name} />
                </div>
                <div className=' col-5 d-flex  flex-column justify-content-center '>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>${price}</p>
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
            <div>
                <p> pares disponibles: {stock}</p>
            </div>
        </>
    )
}

export default ItemDetail