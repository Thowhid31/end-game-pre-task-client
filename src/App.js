
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/to-do' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
