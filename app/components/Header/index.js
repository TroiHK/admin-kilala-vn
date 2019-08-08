import React, { Component } from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBIcon,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends Component {
  render() {
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: 'horizontal',
      flexDirection: 'row',
    };
    return (
      <MDBNavbar color="indigo" dark className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarNav left>
          <MDBNavItem className="d-none d-md-inline text-white navbar-brand">
            <strong>
              <FormattedMessage className="text-white font-weight-bold" {...messages.home} />
            </strong>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right style={specialCaseNavbarStyles}>
          <MDBNavItem active>
            <HeaderLink to="/">
              <MDBIcon icon="envelope" className="d-inline-inline" />
              <div className="d-none d-md-inline ml-2">
                <FormattedMessage {...messages.email} />
              </div>
            </HeaderLink>
          </MDBNavItem>
          <MDBNavItem>
            <HeaderLink to="/">
              <MDBIcon icon="comments" className="d-inline-inline" />
              <div className="d-none d-md-inline ml-2">
                <FormattedMessage {...messages.comment} />
              </div>
            </HeaderLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav>
                <MDBIcon icon="user" className="d-inline-inline" />
                <div className="d-none d-md-inline ml-2">User</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="shadow animated--grow-in" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default Header;
