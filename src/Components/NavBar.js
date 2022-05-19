import '../css/NavBar.css'
import CartWidget from './CartWidget.js'
const NavBar = () => {


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex justify-content-around ">
          <a class="navbar-brand " href="/#">E-commerce</a>
      
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse navbar-collapse  " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#">Zapatillas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Remeras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Buzos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/#">Pantalones</a>
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