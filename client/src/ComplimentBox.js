
// CommentBox.js
import React, { Component } from 'react';
import ComplimentList from './ComplimentList';
import ComplimentForm from './ComplimentForm';
import DATA from './data';
import './ComplimentBox.css';

class ComplimentBox extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="container">
        <div className="compliments">
          <h2>Compliments:</h2>
          <ComplimentList data={DATA} />
        </div>
        <div className="form">
          <ComplimentForm />
        </div>
      </div>
    );
  }
}

export default ComplimentBox;