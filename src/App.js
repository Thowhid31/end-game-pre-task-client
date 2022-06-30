
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Todo from './Pages/Todo';
import Calender from './Pages/Calender';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/to-do' element={<Todo/>}></Route>
      <Route path='/calender' element={<Calender/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
