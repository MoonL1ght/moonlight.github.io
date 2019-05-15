import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {LinkContainer} from 'react-router-bootstrap';
import './navigation.css';

const pages = {
  about_page: 'about',
  contacts_page: 'contacts'
  // words_page: 'words',
  // learn_page: 'learn'
};

class Navigation extends React.Component {

  constructor() {
    super();
    this.state = {
      active: pages.page1,
    }
  }

  handleSelect(key) {
    this.setState({active: key});
  }

  // logout() {
  //   let logout = confirm('Закончить сессию и выйти?')
  //   if (logout) {
  //     window.location.href = '/logout';
  //     localStorage.clear();
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className='mb-navbar-custom'>
          <NavbarBrand href="/" className="mb-navbar-brand">MOONL1GHT'S BLOG</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <LinkContainer to={`${this.props.url}${pages.about_page}`}>
              <NavLink className='mb-navlink-custom'>About</NavLink>
            </LinkContainer>
            <LinkContainer to={`${this.props.url}${pages.contacts_page}`}>
              <NavLink className='mb-navlink-custom'>Contacts</NavLink>
            </LinkContainer>
            {/* <LinkContainer to={`${this.props.url}${pages.learn_page}`}>
              <NavLink>Learn</NavLink>
            </LinkContainer> */}
            {/* <NavItem>
              <NavLink href={`${this.props.url}${pages.page1}`}>Words</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink href={`/${pages.learn_page}`}>Learn</NavLink>
            </NavItem> */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;