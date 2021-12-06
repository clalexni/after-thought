import React from 'react';

const ReceivedCard = ({thought}) => {
  return (thought === null)?
    (<div></div>):
    (
      <div style={{width: 'fitContent'}} className='displayCard'>
        <p style={{marginTop: '0'}}>
          <span style={{color: '#646669'}}>Received From </span> {thought.receiver_name}
        </p>
        <p>{thought.message}</p>
        <p style={{marginBottom: '0', color: '#646669'}}>
        Created on {thought.create_date.slice(0, 10)}. <br/>
        Received on {thought.modified_date.slice(0, 10)}.
        </p>
      </div>
    )
}

export default ReceivedCard;