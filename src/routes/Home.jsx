import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import UserContext from "../UserContext.js";
import ThoughtCard from "../components/ThoughtCard.jsx";
import ReceivedCard from "../components/ReceivedCard.jsx";

import Login from './Login.jsx';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const [receivedThoughts, setReceivedThoughts] = useState([]);
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    if (user !== null) {
      axios.get(`/thoughts/${user.username}`)
        .then(res => {
          console.log('thoughts', res);
          setThoughts(res.data);
        })
        .catch(err => {
          console.error(err);
        });

      axios.get(`/thoughts/${user.username}/received`)
        .then(res => {
          console.log('received', res);
          setReceivedThoughts(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [user]);


  return (user === null)?
    (<Login/>):
    (
      <>
        <div className='hello-msg'>Hello, {user.nickname} ...</div>
        <div style={{ marginRight: '1.5%', float: 'left', width: '48.5%'}} id='thought-left-container'>
        <p style={{marginTop: '0'}}>Your thoughts: </p>
          {
            thoughts.map(thought => {
              return <ThoughtCard key={thought.id} thought={thought}/>
            })
          }
        </div>
        <div style={{ marginLeft: '1.5%', float: 'left', width: '48.5%'}} id='thought-right-container'>
        <p style={{marginTop: '0'}}>Thought Received: </p>
          {
            receivedThoughts.map(thought => {
              return <ReceivedCard key={thought.id} thought={thought}/>
            })
          }
        </div>
      </>
    )
}

export default Home;