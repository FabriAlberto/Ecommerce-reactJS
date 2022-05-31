import React from 'react'
import '../../css/Home.css'
const SearchContainer = () => {

    const vocales=[65,69,73,79,85,32]
    
    const handeKeyDown = (e) => {

      if(vocales.some(letra=>letra===e.keyCode)){
          e.preventDefault();
          console.log(e.key)
      }
      
    }

    return (
    
        <div  className=" col-6 d-flex flex-row align-items-center " style={{margin:'50px', height:'25px'}}>
            <p>Busca tu prenda favorita</p>
            <input onKeyDown={handeKeyDown} style={{ widht: '100px', height:'25px' }} />
            <i class="bi bi-search" style={{margin:'5px', color:'blue'}}></i>
        </div>
    )
}

export default SearchContainer