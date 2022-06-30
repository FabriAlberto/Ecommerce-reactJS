import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../../mocks/FirebaseConfig"
import { toast } from 'react-hot-toast';
import { Formik,Form,Field,ErrorMessage } from 'formik';

const Formulario = ({ setComprar }) => {
    let tot = useContext(CartContext)
    
    const generateOrder = async (form) => {
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
                surname: form.surname,
                email: form.email,
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

        toast.promise(createOrderInFS(),
            {
                loading: 'Loading',
                success: (data) => `Tu orden ha sido creada ! ID: ${data.id}`,
                error: (err) => `This just happened: ${err.toString()}`,

            },
        );
        
        setComprar(false);

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
           <div className='container form__container '>
            <button  className='back__to__car ' onClick={() => setComprar(false)}> BACK TO CAR</button>

            <Formik
            validate={(valores)=>{
              let errors={} 
               /* Errores para el nombre */
                if (!valores.name) errors.name='Porfavor ingresa tu nombre';
                else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name))
                errors.name='El nombre solo puede contener letras y espacios';
                /* Errores para el apellido */
                if (!valores.surname) errors.surname='Porfavor ingresa tu apellido';
                else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)) 
                errors.surname='El apellido solo puede contener letras y espacios';
                   /* Errores para el email*/
                if (!valores.email) errors.email='Porfavor ingresa tu email';
                else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) 
                errors.email='El correo solo puede contener, letras, numeros,puntos,guiones y guiones bajos';
                 /* Errores para el tel */
                if (!valores.cel) errors.cel='Porfavor ingresa tu telefono';
               
                return errors;
            }}
                initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    cel: ''

                }}
                onSubmit={(valores,{resetForm}) => {
                    generateOrder(valores)
                    resetForm();
                }}
            >
                {({ errors}) => (


                    <div className=' container  d-flex flex-column align-items-center justify-content-center  '>
                          <div>
                            <h3>ESTAS A UN PASO DE TERMINAR TU COMPRA 🥳</h3>
                          </div>
                        <Form className=" forms rounded col-12 col-md-8 d-flex flex-column 
                         justify-content-center align-items-center " >
                            <div className='col-md-8 my-2'>
                                <label htmlFor='name'>Name:</label>
                                <Field
                                    type="text"
                                    name='name'
                                    placeholder=' write you name'
                                    className='form-control'
                                  
                                />
                                <ErrorMessage name='name' component={()=>(<div className='errores__form'>{errors.name}</div>)}/>
                            </div>
                            <div className='col-md-8 my-2'>
                                <label htmlFor='surname'>Surname:</label>
                                <Field
                                    type="text"
                                    name='surname'
                                    placeholder=' write you surname'
                                    className='form-control '
                                   
                                />
                                <ErrorMessage name='surname' component={()=>(<div className='errores__form'>{errors.surname}</div>)}/>
                            </div>
                            <div className='col-md-8 my-2'>
                                <label htmlFor='email'>Email:</label>
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='email@email.com'
                                    className='form-control '
                                   
                                />
                                <ErrorMessage name='email' component={() =>(<div className='errores__form'>{errors.email}</div>)}/>
                                {/* {touched.email&&errors.email&&<div className='errores__form'>{errors.email}</div>} */}
                            </div>

                            <div className='col-md-8 my-2'>
                                <label htmlFor='cel'>cel:</label>
                                <Field
                                    type="number"
                                    name='cel'
                                    placeholder=' write you tel'
                                    className='form-control '
                                  
                                />
                                <ErrorMessage name='cel' component={()=>(<div className='errores__form'>{errors.cel}</div>)}/>
                               {/*  {touched.cel&&errors.cel&&<div className='errores__form'>{errors.cel}</div>} */}
                            </div>
                            <div className='mt-2 total__form'>
                                TOTAL: ${ tot.calcTotal() - tot.calcDescuento()}
                            </div>

                            <div className='col-md-8 my-2'>
                                <button className='btn btn__comprar my-1 text-light'
                                    type='submit'
                                    style={{ width: '100%' }}
                                >Finalizar Compra</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>

            </div>
        </>

    )
}

export default Formulario;
