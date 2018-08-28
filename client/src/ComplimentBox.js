
// CommentBox.js
import React, { Component } from 'react';
import ComplimentList from './ComplimentList';
import ComplimentForm from './ComplimentForm';
import './ComplimentBox.css';

class ComplimentBox extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      compliments: []
    };
  }

  componentDidMount() {
    this.getCompliments();
  }

  getCompliments = () => {
    fetch('/api/compliments')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="compliments">
          <h2>Compliments:</h2>
          <ComplimentList compliments={data} />
        </div>
        <div className="form">
          <ComplimentForm />
        </div>
      </div>
    );
  }
}

export default ComplimentBox;