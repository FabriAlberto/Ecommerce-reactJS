import React, { useContext, } from 'react'
import { CartContext } from './CartContext'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../../mocks/FirebaseConfig"
import { toast, Toaster } from 'react-hot-toast';
const Order = () => {

    let tot = useContext(CartContext)

    const generateOrder = () => {
        let itemsCarOrder = tot.cartList.map(item => ({
            id: item.id,
            title: item.name,
            priceForUniti: item.price,
            cantidad: item.cantidad,
            priceTotal: item.price * item.cantidad,
        }));

        let order = {
            buyer: {
                name: "Fabri alberto",
                email: "fabri@gmail.com",
                phone: "123456789"
            },
            total: tot.calcTotal() - tot.calcDescuento(),
            items: itemsCarOrder,
            date: serverTimestamp()
        };
        console.log(order)

        const createOrderInFS = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        toast.promise( createOrderInFS(),
            {
                loading: 'Loading',
                success: (data) => `Tu orden ha sido creada ! ID: ${data.id}`,
                error: (err) => `This just happened: ${err.toString()}`,

            },
        );


        setTimeout(() => {
             /* function que ingresa al firestore y desincrementa el stock del producto comprado */
            tot.cartList.forEach(async (element) => {
                const itemDB = doc(db, "products", element.id)
                await updateDoc(itemDB, {
                    stock: increment(-element.cantidad)
                });
            })
           /*  borra el carrito  */
            tot.clear()
        }, 3000)


    }




    return (
        <>
            <div className='order'>
                <h2> Order </h2>
                <div className='d-flex  order__total'> <p> Sub total </p> <p> {tot.calcSubtotal()} </p></div>
                <div className='d-flex order__total'> <p> descuento </p> <p> {tot.calcDescuento()}</p></div>
                <div className='d-flex order__total'> <p> Total: </p> <p>{tot.calcTotal() - tot.calcDescuento()} </p></div>
                <button onClick={() => generateOrder()} > CHECKOUT</button>
            </div>
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

        </>
    )
}

export default Order