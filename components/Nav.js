import React, { Component, PropTypes } from 'react';
import {Container, Row, Col} from 'reactstrap';
import style from './style.css';
console.log(style.test)
class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Container>
            <nav className="navbar navbar-default">
                <ul className={style.test}>
                    <li>Learning Center</li>
                    <li>Who am I</li>
                    <li>Contacts</li>
                    <li></li>
                </ul>
            </nav>
        </Container>
    )
  }
}

export default Nav
