import React, {useState, useMemo} from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import UserContext from './UserContext.js';

function App() {

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser}), [user, setUser]);

  return (
    <BrowserRouter>
      <div className="navbar">
        <a id='logo'>afterthought</a>
        <span style={{width: '100%'}}>
          <a style={{marginLeft: '10%'}}>About</a>
          <Link className='nav-link' to='/' style={{marginLeft: '5%'}}>Account</Link>
        </span>
      </div>

      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default hot(App);
