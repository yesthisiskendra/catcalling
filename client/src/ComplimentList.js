// ComplimentList.js
import React from 'react';
import Compliment from './Compliment';

const ComplimentList = (props) => {
  const complimentNodes = props.compliments.map(compliment => (
    <Compliment key={compliment.compliment_id} id={compliment.compliment_id}>
      { compliment.compliment_text}
    </Compliment>
  ));
  return (
    <div>
      { complimentNodes }
    </div>
  );
};

export default ComplimentList;