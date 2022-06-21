import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import './css/Home.css'
import ItemDetailContainer from './Components/Detail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import SearchContainer from './Components/Search/SearchContainer'; */
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/Cart/CartContext';

const Home = () => {
 

  return (
    <>
   
      <CartContextProvider>
        <div className="Home">
          <BrowserRouter>
            <NavBar></NavBar>
            {/* <SearchContainer></SearchContainer> */}
            <Routes>
              <Route path="/" element={<ItemListContainer  />} />
              <Route path="/category/:categoria" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartContextProvider>
  
    </>

  );
}

export default Home;