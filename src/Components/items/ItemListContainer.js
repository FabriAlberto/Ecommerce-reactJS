
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getData } from "../../mocks/Productos";
import { useParams } from "react-router-dom";
const ItemListContainer = (props) => {

  const [listProds, setListProds] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoria } = useParams()

  useEffect(() => {
    setLoading(true)
    
    setTimeout(()=>{
      getData
      .then((res) => {
        categoria === undefined ? setListProds(res)
        :
        setListProds(res.filter(Items => Items.category === categoria))
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    },1000)
    
  }, [categoria]);

  return (
    <>
      <p className='saludo' >{props.greeting} </p>

      {loading ? <h2 className="Loader text-primary">Cargando...</h2> : <ItemList cat={categoria} listProds={listProds} />}

    </>
  );
}


export default ItemListContainer;