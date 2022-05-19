import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './css/Home.css'
import ItemCount from './Components/ItemCount';
const Home = () => {
 let saludo="Hola bienvenido a mi E-commerce"
  return (
    <>
      <div className="Home">
        <NavBar ></NavBar>
      </div>
      <div className='saludo'>
      <ItemListContainer greeting={saludo}/>
      </div>
      <ItemCount/>

    </>

  );
}

export default Home;