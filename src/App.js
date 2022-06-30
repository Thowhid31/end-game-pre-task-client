
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/to-do' element={<Todo/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
