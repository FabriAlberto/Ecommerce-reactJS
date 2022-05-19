import { useState } from "react";
import'../css/ItemCount.css'
const ItemCount = () => {
    const [cont, setCont] = useState(0);

    const sumar = () => { setCont(cont + 1) }
    const restar = () => { cont > 0 ? setCont(cont - 1) : console.log("error") }
    const onAdd=()=>{ cont>0? alert( `Elementos agregados ${cont} `) : alert("no agrego elementos") }
    return (
        <>
            <div className="contenedor__ItemCount">
                <p> Contador </p>
                <div className="contenedor__contador">
                    <button onClick={sumar} className="button__contador"> + </button>
                    <p className="p__contador">{cont}</p>
                    <button onClick={restar} className="button__contador"> - </button>
                </div>
                <button onClick={onAdd} className="button__add">Add to carrito</button>
            </div>
        </>
    );

}
export default ItemCount;