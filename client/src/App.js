import { Link, Route, Routes } from "react-router-dom";

import {AddPet} from './addPet';
import Home from './Home';
import Edit from './Edit';
import  "./buttonStyle.css"
import './styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <>


      <ul>
      <li className='nav-item'>
        <Link className='nav-link-active' to="/">Existing Pets</Link>
      </li>
      
      <li>
        <Link to="/pets_add">Add New Pet</Link>
      </li>
       
      </ul>


    <div className='grid-item-2'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pets_add" element={<AddPet/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
    </div>

    </>
  );
}

export default App;


