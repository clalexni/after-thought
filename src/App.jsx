import React, {useState, useMemo} from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import CreateThought from './routes/CreateThought.jsx';
import About from './routes/About.jsx';

import UserContext from './UserContext.js';


function App() {

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser}), [user, setUser]);

  return (
    <BrowserRouter>
      <div className="navbar">
        <Link className='nav-link' to='/home' id='logo'>afterthought</Link>
        <span style={{width: '100%'}}>
          <Link className='nav-link' to='/create-thought' style={{marginLeft: '12%'}}>Create Thought</Link>
          <Link className='nav-link' to='/' style={{marginLeft: '12%'}}>Account</Link>
          <Link className='nav-link' to='/about' style={{marginLeft: '12%'}}>About</Link>
        </span>
      </div>

      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/create-thought' element={<CreateThought/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default hot(App);
