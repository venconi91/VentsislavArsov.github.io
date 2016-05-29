import React, { Component, PropTypes } from 'react';
import {Container, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import style from './style.css';

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <header>
            <Container fluid>
                <nav className={style.nav}>
                    <ul className={style.menuList}>
                        <li className={classnames('padding-all-20', style.menuItem)}><a href='#'>Learning Center</a></li>
                        <li className={classnames('padding-all-20', style.menuItem)}><a href='#'>Who am I</a></li>
                        <li className={classnames('padding-all-20', style.menuItem)}><a href='#'>Contacts</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
  }
}

export default Nav
