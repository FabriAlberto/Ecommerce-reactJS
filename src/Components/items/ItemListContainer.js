
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../mocks/FirebaseFetch";
const ItemListContainer = (props) => {

  const [listProds, setListProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {
     firestoreFetch(categoria)
     .then((resolve)=>{ setListProds(resolve) })
     .catch(err=>console.log(err))
     .finally(()=>setLoading(false))
    /* setTimeout(()=>{
      getData
      .then((res) => {
        categoria === undefined ? setListProds(res)
        :
        setListProds(res.filter(Items => Items.category === categoria))
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    },1000) */
  }, [categoria]);
  return (
    <>
      <p className='saludo' >{props.greeting} </p>
      {loading ? <h2 className="Loader text-primary">Cargando...</h2> : <ItemList cat={categoria} listProds={listProds} />}

    </>
  );
}


export default ItemListContainer;