import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { firestoreId } from '../../mocks/FirebaseFetch'
import Loading from '../items/Loading'

const ItemDetailContainer = () => {
  const [item ,setItem] = useState([])
  const [loading, setLoading] = useState(false)
   const{id}= useParams()

  useEffect(()=>{
    setLoading(true)
      firestoreId(id)  
      .then((res) => setItem(res))
       .catch((error) => console.log(error))
       .finally(() => setLoading(false))
  },[id])
  
  return (
    <>
    {loading?<Loading></Loading>:<ItemDetail  Item={item} />}
    </>
  )
}

export default ItemDetailContainer