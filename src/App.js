import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { Route,BrowserRouter,Routes,Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<Landing/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signup' element = {<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
