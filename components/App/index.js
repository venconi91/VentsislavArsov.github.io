import React, { Component, PropTypes } from 'react'
import Header from './../Header';
import Home from './../Home.js';
import resetStyles from './resetStyles.css';
import globalStyles from './globalStyles.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Home></Home>
      </div>
    )
  }
}

export default App
