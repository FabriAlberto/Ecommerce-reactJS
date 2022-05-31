import { useState } from "react";
import'../../css/ItemCount.css'
const ItemCount = ({stock}) => {
   const[cont, setCont] = useState(1);
     
    const sumar = () => { cont < stock && setCont(cont + 1) }
    const restar = () => { cont > 0 &&  setCont(cont - 1) }
    const onAdd=()=>{ cont>0? alert( `Elementos agregados ${cont} `) : alert("no agrego elementos") }
    return (
        <>
            <div className="contenedor__ItemCount">
                <div className="contenedor__contador">
                    <button onClick={sumar} className="button__contador"> + </button>
                    <p className="p__contador">{cont}</p>
                    <button onClick={restar} className="button__contador"> - </button>
                </div>
                <button onClick={onAdd}className="button__add">Add to car</button>
                {/* No entendi bien si tennia que usar o no onAdd igualmente lo puse con una funcion de alert */}
            </div>
        </>
    );

}
export default ItemCount;