import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Naver from './Components/Nav/Naver';

function App() {
  return (
    <div>
      <Naver></Naver>


    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>







    </div>
  );
}

export default App;
