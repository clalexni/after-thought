import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext.js";
import axios from 'axios';

const Login = () => {

  const {user, setUser} = useContext(UserContext);

  const [username, setUserName] = useState('');

  let onChangeHandler = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  let onClickHandler = (e) => {
    axios.get(`/users/${username}`)
      .then(res => {
        console.log(res);
        setUser(res.data[0]);
      })
      .catch(err => {
        console.error(err);
      })
  };

  return (
    <>
      <div className="login">
        <div className='title'>login</div>
        <form>
          <input onChange={onChangeHandler} type="text" placeholder="username" autoComplete='username'/>
          <input
            type="password"
            placeholder="password"
            autoComplete="password"
          />

          <Link className='login-btn' to='/home' onClick={onClickHandler}>
            Sign In
          </Link>
        </form>
      </div>
    </>
  )
}

export default Login;