import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/items/ItemListContainer';
import './css/Home.css'
import ItemDetailContainer from './Components/Detail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import SearchContainer from './Components/Search/SearchContainer'; */
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/Cart/CartContext';
import Form from './Components/Cart/Form';
const Home = () => {
 

  return (
    <>
   
      <CartContextProvider>
        <div className="Home">
          <BrowserRouter>
            <NavBar></NavBar>
             {/* <Slider></Slider> */}
            <Routes>
              <Route path="/" element={<ItemListContainer  />} />
              <Route path="/category/:categoria" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/form' element={<Form></Form>}/> 
              </Routes>
          </BrowserRouter>
        </div>
      </CartContextProvider>
  
    </>

  );
}

export default Home;