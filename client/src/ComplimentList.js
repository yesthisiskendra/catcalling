// CommentList.js
import React from 'react';
import PropTypes from 'prop-types';
import Compliment from './Compliment';

const ComplimentList = (props) => {
  const complimentNodes = props.data.map(compliment => (
    <Compliment author={compliment.author} key={compliment._id} id={compliment._id}>
      { compliment.text}
    </Compliment>
  ));
  return (
    <div>
      { complimentNodes }
    </div>
  );
};

ComplimentList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
  })),
};

ComplimentList.defaultProps = {
  data: [],
};

export default ComplimentList;