import React from 'react';
const ThoughtCard = ({thought}) => {
  return (thought === null)?
    (<div></div>):
    (
      <div style={{width: 'fitContent'}} className='displayCard'>
        <p style={{marginTop: '0'}}>
          <span style={{color: '#646669'}}>To</span> {thought.receiver_name}
        </p>
        <p>{thought.message}</p>
        <p style={{marginBottom: '0', color: '#646669'}}>
        Created since {thought.create_date.slice(0, 10)}. <br/>
        Timer has reset. Now scheduled on {parseInt(thought.modified_date.slice(0, 4))+5}.
        </p>
      </div>
    )
}

export default ThoughtCard;