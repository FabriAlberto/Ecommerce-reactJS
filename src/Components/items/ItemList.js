
import { useState } from 'react';
import React from 'react'
import Item from './Item';
import OrderBy from './OrderBy';
import Slider from './Slider';
const ItemList = ({ listProds, cat }) => {
    /* const[productos,setProductos]=useState(listProds) */
    const [selec, setSelect] = useState()




    /*  console.log("producto old",productos) */
    const ordenar = () => {

        switch (selec) {
            case "menor": {
                listProds.sort((a, b) => {
                    if (a.price < b.price) return -1;
                    if (a.price > b.price) return 1;
                    else return 0;
                })

                break;

            }
            case "mayor": {
                listProds.sort((a, b) => {
                    if (a.price > b.price) return -1;
                    if (a.price < b.price) return 1;
                    else return 0;
                })

                break;
            }
            case "A": {
                listProds.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    else return 0;

                })

                break;
            }
            case "Z": {
                listProds.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    else return 0;
                })

                break;
            }
            default: {
                break;
            }
        }
    }
    ordenar();
    return (
        <>


            {cat === undefined ? <Slider></Slider>
                :
                (<div className='col-12 d-flex my-4 p-2'>
                    <h1 className='category__h1'>{cat.toUpperCase()}</h1>
                </div>)}
            <div className=' container__orederby container d-flex justify-content-end  ' style={{ width: '100%', height: 'auto', marginTop: '20px' }}>


                <OrderBy setSelect={setSelect}></OrderBy>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container__items '>
                    <div className='d-flex justify-content-center flex-wrap'>

                        {

                            listProds.map((producto) => <Item key={producto.name} producto={producto} />)

                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemList
