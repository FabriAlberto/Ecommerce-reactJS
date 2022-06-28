
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../mocks/FirebaseFetch";
import Loading from "./Loading";
const ItemListContainer = () => {

  const [listProds, setListProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {
     firestoreFetch(categoria)
     .then((resolve)=>{ setListProds(resolve) })
     .catch(err=>console.log(err))
     .finally(()=>setLoading(false))

  }, [categoria]);
  return (
    <>
      
      {loading ? <Loading> </Loading> : <ItemList cat={categoria} listProds={listProds} />}

    </>
  );
}


export default ItemListContainer;