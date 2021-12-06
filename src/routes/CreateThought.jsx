import React, {useContext} from 'react';
import UserContext from "../UserContext.js";
import Login from './Login.jsx';

const CreateThought = () => {
  const {user, setUser} = useContext(UserContext);

  return (user === null)?
    (<Login/>):
    (
      <div>
        Create a thought: 
      </div>
    )
}


export default CreateThought;
