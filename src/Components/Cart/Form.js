import React, { Component, useContext } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../../mocks/FirebaseConfig"
import { toast } from 'react-hot-toast';
const Form = ({setComprar}) => {
    let tot = useContext(CartContext)

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        cel: ''
    })
    const handleInputChange = (e) => {
        
      setForm({
        ...form,
        [e.target.name]:e.target.value
       })
    }
    const sendData=(e)=>{
        e.preventDefault();
        console.log(form)
        generateOrder();
    }
   
    
    
        const generateOrder = async () => {
            let itemsCarOrder = tot.cartList.map(item => ({
                id: item.id,
                title: item.name,
                priceForUniti: item.price,
                cantidad: item.cantidad,
                priceTotal: item.price * item.cantidad,
            }));
    
            let order = {
                buyer: {
                    name: form.name,
                    surname:form.surname,
                    email:form.email,
                    phone: form.cel
                },
                total: tot.calcTotal() - tot.calcDescuento(),
                items: itemsCarOrder,
                date: serverTimestamp()
            };
         
    
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
    
            setComprar(false)
            setTimeout(() => {
                 /* function que ingresa al firestore y desincrementa el stock del producto comprado */
                tot.cartList.forEach(async(element) => {
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
            <div className=' container d-flex justify-content-center'>
                <form onSubmit={sendData}
                className=" forms col-md-12 d-flex flex-column  justify-content-center align-items-center " >

                    <div className='col-md-5'>
                        <input
                            type="text"
                            name='name'
                            placeholder=' write you name'
                            className='form-control my-2'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-5'>
                        <input
                            type="text"
                            name='surname'
                            placeholder=' write you surname'
                            className='form-control my-2'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-5'>
                        <input
                            type="email"
                            name='email'
                            placeholder=' write you email'
                            className='form-control my-2'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='col-md-5'>
                        <input
                            type="number"
                            name='cel'
                            placeholder=' write you tel'
                            className='form-control my-2'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                       Precio Total de compra: ${tot.calcTotal() - tot.calcDescuento()}

                    </div>
                    <div className='col-md-5'>
                        <button className='btn btn-primary'  type='submit'>END compra</button>
                    </div>
                </form>

                
            </div> 
        </>

    )
}

export default Form;
