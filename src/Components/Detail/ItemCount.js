
import'../../css/ItemCount.css'

const ItemCount = ({stock,cont,onAdd,setCont}) => {
   
    const sumar = () => { cont < stock && setCont(cont + 1) }

    const restar = () => { cont > 0 &&  setCont(cont - 1) }   
    return (
        <>
            <div className="contenedor__ItemCount">
                <div className="contenedor__contador">
                    <button onClick={sumar} className="button__contador"> + </button>
                    <p className="p__contador">{cont}</p>
                    <button onClick={restar} className="button__contador"> - </button>
                </div>
                <button onClick={onAdd}className="button__add">Add to car</button>
                
            </div>
        </>
    );

}
export default ItemCount;