import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../mocks/Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item ,setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const{id}= useParams()
   

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{

      getData
      .then((res) => setItem(res.find(item=>item.id===parseInt(id))))
       .catch((error) => console.log(error))
       .finally(() => setLoading(false))
    },1000)
     
  },[id])

 
  return (
    <>
    {loading?<p>cargando...</p>:<ItemDetail Item={item} />}
    </>
  )
}

export default ItemDetailContainer