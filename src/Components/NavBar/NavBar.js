import { Link } from 'react-router-dom';
import '../../css/NavBar.css'
import CartWidget from './CartWidget.js'
const NavBar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around ">
          <Link  style={{textDecoration:'none'}} to="/"> <div className='navbar__container'><div className='logo'><i class="bi bi-trophy-fill"></i></div> <p className="navbar-brand">sportCenter</p></div></Link>
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}} to={"/category/zapatillas"} ><p className="nav-link active" aria-current="page" >Sneakers</p></Link>
              </li>
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/remeras"}> <p className="nav-link" >T-shirt</p></Link>
              </li>
              <li className="nav-item">
              <Link style={{textDecoration:'none'}} to={"/category/buzos"}> <p className="nav-link" >Hoodies</p></Link>
              </li>
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/pantalones"}> <p className="nav-link " >Pants</p></Link>
              </li>
            </ul>
            
          </div>
          <div className='CartWidget collapse navbar-collapse ' id="navbarNav">
            <Link to={'/cart'}><CartWidget/></Link>
            </div>
        </div>
      </nav>


    </>


  );

}

export default NavBar;