import React, { useEffect,useState } from 'react'
import { getData } from '../../mocks/Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item ,setItem] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(()=>{
     getData
     .then((res) => setItem(res[1]))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
     
  },[])

  console.log(item)
  return (
    <>
    {loading?<p>cargando...</p>:<ItemDetail Item={item} />}
    </>
  )
}

export default ItemDetailContainer