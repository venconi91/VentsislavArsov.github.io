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
        <Container fluid className='padding-all-0'>
            <header className={style.header}>
                <div className={classnames('padding-left-25', style.logoContainer)}>
                    <img src='https://automattic.files.wordpress.com/2016/05/logo-wordpress-com-vertical-white.png' className={style.logo} />
                </div>
                <nav className={classnames('pull-xs-right', style.nav)}>
                    <ul className={classnames('margin-all-0',style.menuList)}>
                        <li className={style.menuItem}><a href='#'>Learning Center</a></li>
                        <li className={style.menuItem}><a href='#'>Who am I</a></li>
                        <li className={style.menuItem}><a href='#'>Contacts</a></li>
                    </ul>
                </nav>
            
            </header>
        </Container>
    )
  }
}

export default Nav
