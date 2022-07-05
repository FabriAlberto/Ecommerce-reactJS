import React from 'react'

const OrderBy = ({setSelect}) => {
    
  
    const handleSelection = (e) => {
        setSelect(e.target.value)
    } 
    

  return (
    <div className='orderby d-flex flex-row '> 
           
            <div className='fieldset__container d-flex flex-md-row flex-column'>
                <p>SORT BY:</p>
            <select className='select__order' onClick={handleSelection}>
                <option className='op' value={"sin"} > </option>
                <option className='op' value={"menor"}>Lower price</option>
                <option className='op' value={"mayor"} >Higer price</option>
                <option className='op' value={"A"}>A-Z</option>
                <option className='op' value={"Z"} >Z-A</option>
                
            </select>
            </div>
          </div>
  )
}

export default OrderBy