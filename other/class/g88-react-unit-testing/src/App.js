import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    showImage: false
  }

  handleClick = () => {
    this.setState(prevState => this.setState({showImage: !prevState.showImage }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.showImage ? <img src={logo} className="App-logo" alt="logo" /> : null }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="App-button" onClick={this.handleClick}>
            Show Image
          </button>
        </header>
      </div>
    );
  }
}

export default App;
