import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Compliment = props => (
  <div className="singleCompliment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleComplimentContent">
        <h3>{props.author}</h3>
        <ReactMarkdown source={props.children} />
      </div>
      <div className="singleComplimentButtons">
      </div>
    </div>
  </div>
);

Compliment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Compliment;