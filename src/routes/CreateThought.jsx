import React, {useContext} from 'react';
import UserContext from "../UserContext.js";
import Login from './Login.jsx';
import { Link } from "react-router-dom";
import axios from 'axios';

const CreateThought = () => {
  const {user, setUser} = useContext(UserContext);

  const submitHandler = (e) => {
    let message = document.getElementById('thought-textfield').value;
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    var data = {
      message: message,
      writer_id: user.id,
      writer_name: user.nickname,
      receiver_name: name,
      receiver_email: email
    }
    e.preventDefault();
    axios.post('/thoughts', data)
      .then(res => {
        console.log('posted');
      })
      .catch(err => {
        console.error(err);
      })

  }

  return (user === null)?
    (<Login/>):
    (
      <div>
        <form id='post-form' style={{textAlign: 'center', marginTop: '5%'}}>
          <div style={{}}>
            <input id='name-input' className='recipient-input' style={{width: '100%'}} type="text" placeholder="recipient name"/>
            <input id='email-input' className='recipient-input' style={{width:'100%'}} type="email" placeholder="recipient email"/>
          </div>

          <div>
            <textarea id='thought-textfield' style={{width: '100%'}} rows='15' cols='60' type='reset' placeholder='Leave your thought here...'/>
          </div>
          <Link onClick={submitHandler} style={{marginTop: '3%', display:'inline', float:'left'}} className='post-btn' to='/home'>Post Your Thought</Link>
        </form>
      </div>
    )
}


export default CreateThought;
