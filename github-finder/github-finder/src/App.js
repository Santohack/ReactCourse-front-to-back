import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>

    
   <div className='flex flex-col justify-between h-screen'>
    <Navbar />
    <main>contect</main>
   </div>
   
    </Router>
  );
}

export default App;
