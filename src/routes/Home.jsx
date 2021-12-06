import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import UserContext from "../UserContext.js";

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const [receivedThoughts, setReceivedThoughts] = useState([]);
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    if (user !== null) {
      axios.get(`/thoughts/${user.username}`)
        .then(res => {
          console.log(res);
          setThoughts(res.data);
        })
        .catch(err => {
          console.error(err);
        });
      axios.get(`/thoughts/${user.username}/received`)
        .then(res => {
          console.log(res);
          setReceivedThoughts(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [user]);
  

  return (!user)?
      (<div className='hello-msg'>Hello...</div>):
      (<div className='hello-msg'>Hello, {user.nickname} </div>)
}

export default Home;