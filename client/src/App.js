import React, { Component } from 'react';
import logo from './catlogo.png';
import './App.css';

class App extends Component {
  state = { 
    kittens: [],
  }

  componentDidMount() {
    this.getKittens();
  }

  getKittens = () => {
    fetch('/api/kittens')
      .then(res => res.json())
      .then(kittens => this.setState({ kittens: kittens }));
  }

  render() {
    const { kittens } = this.state;

    return (
      <div className="App">
          <div>
            <h1>Kittens I know:</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="kittens">
              {kittens.map((kitten, index) =>
                <li key={index}>
                  {kitten}
                </li>
              )}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;