import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { Route,BrowserRouter,Routes,Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <NavBar/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
