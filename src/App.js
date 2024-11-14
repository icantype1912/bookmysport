import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { Route,BrowserRouter,Routes,Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import Booking from './Pages/Booking';
import AboutUs from './Pages/AboutUs';
import Confirmation from './Pages/Confirmation';
import Profile from './Pages/Profile';
import AdminMain from './Pages/AdminMain';

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<Landing/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signup' element = {<SignUp/>}></Route>
          <Route path='/main' element = {<Main/>}></Route>
          <Route path='/booking' element = {<Booking/>}></Route>
          <Route path='/aboutus' element = {<AboutUs/>}></Route>
          <Route path='/confirm' element = {<Confirmation/>}></Route>
          <Route path='/profile' element = {<Profile/>}></Route>
          <Route path='/adminMain' element = {<AdminMain/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
