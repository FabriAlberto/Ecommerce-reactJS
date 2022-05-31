import { Link } from 'react-router-dom';
import '../../css/NavBar.css'
import CartWidget from './CartWidget.js'
const NavBar = () => {


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex justify-content-around ">
          <Link  style={{textDecoration:'none'}} to="/"><p class="navbar-brand" >E-commerce</p></Link>
      
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse  " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link  style={{textDecoration:'none'}} to={"/category/zapatillas"} ><p class="nav-link active" aria-current="page" >Zapatillas</p></Link>
              </li>
              <li class="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/remeras"}> <p class="nav-link" >Remeras</p></Link>
              </li>
              <li class="nav-item">
              <Link style={{textDecoration:'none'}} to={"/category/buzos"}> <p class="nav-link" >Buzos</p></Link>
              </li>
              <li class="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/pantalones"}> <p class="nav-link " >Pantalones</p></Link>
              </li>
            </ul>
            
          </div>
          <div className='CartWidget collapse navbar-collapse ' id="navbarNav">
            <a href="/#"><CartWidget/></a>
            </div>
        </div>
      </nav>


    </>


  );

}

export default NavBar;