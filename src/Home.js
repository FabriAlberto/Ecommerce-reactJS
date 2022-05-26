import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './css/Home.css'
import ItemDetailContainer from './Components/Detail/ItemDetailContainer';
const Home = () => {
 let saludo="Hola bienvenido a mi E-commerce"
  return (
    <>
      <div className="Home">
        <NavBar ></NavBar>
      {/* <ItemListContainer greeting={saludo}/> */}
      <ItemDetailContainer/>
      </div>

    </>

  );
}

export default Home;