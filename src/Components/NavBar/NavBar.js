import { Link } from 'react-router-dom';
import '../../css/NavBar.css'
import CartWidget from './CartWidget.js'
const NavBar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around ">
          <Link  style={{textDecoration:'none'}} to="/"><p className="navbar-brand" >sportCenter</p></Link>
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}} to={"/category/zapatillas"} ><p className="nav-link active" aria-current="page" >Zapatillas</p></Link>
              </li>
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/remeras"}> <p className="nav-link" >Remeras</p></Link>
              </li>
              <li className="nav-item">
              <Link style={{textDecoration:'none'}} to={"/category/buzos"}> <p className="nav-link" >Buzos</p></Link>
              </li>
              <li className="nav-item">
              <Link  style={{textDecoration:'none'}}to={"/category/pantalones"}> <p className="nav-link " >Pantalones</p></Link>
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