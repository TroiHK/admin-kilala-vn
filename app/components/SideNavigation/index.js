/**
 *
 * SideNavigation
 *
 */

import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const SideNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo}/>
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3"/>
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/users" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="users" className="mr-3"/>
            Users
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/projects" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="project-diagram" className="mr-3"/>
            Projects
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/tables" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="table" className="mr-3"/>
            Tables
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/maps" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3"/>
            Maps
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/404" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="exclamation" className="mr-3"/>
            404
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
}

export default SideNavigation;
