import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Naver from './Components/Nav/Naver';
import './App.css'
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import InventoryDetail from './Components/Home/InventoryDetail/InventoryDetail';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';
import ManageInventories from './Components/Manage Inventories/ManageInventories';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import MyItem from './Components/MyItem/MyItem';

function App() {
  return (
    <div className='background'>
      <Naver></Naver>


    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/addNewItem' element={<AddNewItem/>}></Route>
      <Route path='/my-item' element={<MyItem/>}></Route>
      <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
      <Route path='/inventory/:inventoryId' element={
        <PrivateRoute>
          <InventoryDetail></InventoryDetail>
        </PrivateRoute>
      }></Route>
    </Routes>

    







    </div>
  );
}

export default App;
