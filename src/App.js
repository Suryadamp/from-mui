import React from 'react';
import { Route,Routes} from 'react-router-dom';
import MultisepForm from './components/multisepForm';
import './App.css';
function App() {
  return (
    <div className='App' >
    <Routes>
    <Route  path="/" element={< MultisepForm/>}/>
    </Routes>


   </div>
  );
}

export default App;
