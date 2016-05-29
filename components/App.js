import React, { Component, PropTypes } from 'react'
import Nav from './Nav.js';
import Home from './Home.js';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Home></Home>
      </div>
    )
  }
}

export default App
