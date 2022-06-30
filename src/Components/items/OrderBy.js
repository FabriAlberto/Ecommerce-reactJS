import React from 'react'
/* import { useState } from 'react' */
const OrderBy = ({setSelect}) => {
    
    

    const handleSelection = (e) => {
        setSelect(e.target.value)
    } 
    

  return (
    <div className='orderby d-flex flex-row'> 
           
            <fieldset className=' d-flex flex-row'>
                <p>Ordenar :</p>
            <select className='select__order' onClick={handleSelection}>
                <option value={"sin"} > ...</option>
                <option value={"menor"}>Menor precio</option>
                <option value={"mayor"} >Mayor precio</option>
                <option value={"A"}>A-Z</option>
                <option value={"Z"} >Z-A</option>
                
            </select>
            </fieldset>
          </div>
  )
}

export default OrderBy