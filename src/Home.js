import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './css/Home.css'
const Home = () => {
 let saludo="Hola bienvenido a mi E-commerce"
  return (
    <>
      <div className="Home">
        <NavBar ></NavBar>
      <ItemListContainer greeting={saludo}/>
      </div>

    </>

  );
}

export default Home;