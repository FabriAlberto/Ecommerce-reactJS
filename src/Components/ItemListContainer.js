
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getData } from "../mocks/Productos";
const ItemListContainer = (props) => {

  const [listProds, setListProds] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getData
      .then((res) => setListProds(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  return (
    <>
      <p className='saludo' >{props.greeting}</p>
      {loading ? <h2 className="Loader text-primary">Cargando...</h2> : <ItemList listProds={listProds} />}

    </>
  );
}


export default ItemListContainer;