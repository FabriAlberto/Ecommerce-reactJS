import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import './css/Home.css'
import ItemDetailContainer from './Components/Detail/ItemDetailContainer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SearchContainer from './Components/Search/SearchContainer';
const Home = () => {
 let saludo="Hola bienvenido a mi E-commerce"

  return (
    <>
      <div className="Home">
        <BrowserRouter>
        <NavBar></NavBar>
        <SearchContainer></SearchContainer>
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting={saludo}/>}/>
          <Route path="/category/:categoria" element= {<ItemListContainer greeting={saludo}/>}/>
          <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
           </Routes>
      </BrowserRouter>
      </div>

    </>

  );
}

export default Home;