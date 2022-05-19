
import ItemCount from "./ItemCount";
const ItemListContainer=(props)=>{

    return(
      <>
       <p className='saludo' >{props.greeting}</p>

       <ItemCount/>
     </>
    );


}
export default ItemListContainer;