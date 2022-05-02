import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Naver from './Components/Nav/Naver';
import './App.css'
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import InventoryDetail from './Components/Home/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div className='background'>
      <Naver></Naver>


    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
    </Routes>

    <Footer></Footer>







    </div>
  );
}

export default App;
