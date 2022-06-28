
import'../../css/ItemCount.css'

const ItemCount = ({stock,cont,onAdd,setCont}) => {
   
    const sumar = () => { cont < stock && setCont(cont + 1) }

    const restar = () => { cont > 0 &&  setCont(cont - 1) }   
    return (
        <>  
          <div className='comprar'>
            <div className="contenedor__ItemCount">
                <div className="contenedor__contador">
                    <button onClick={sumar} className="button__contador"> + </button>
                    <p className="p__contador">{cont}</p>
                    <button onClick={restar} className="button__contador"> - </button>
                </div>
                
                {cont>0? <button onClick={onAdd}className="button__add">Add to car</button> :<button className="button__add__none">Add to car</button>  }
                
            </div>
        </div>
        </>
    );

}
export default ItemCount;