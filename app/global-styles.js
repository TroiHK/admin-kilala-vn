import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #EDEDEE;
  }
  
  a{
    color: inherit;
  }
  
  .list-group-flush{
    color: #495057;
  }
  
  .active{
    background-color: #e9ecef !;
  }
  
  main {
    background-color: #EDEDEE;
  }
  
  .navbar-brand{
    margin-left: 15px;
  }
  
  .sidebar-fixed {
    left: 0;
    top: 0;
    height: 100vh;
    width: 270px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 1050;
    background-color: #fff;
    padding: 1.5rem;
    padding-top: 0;
  }
  
  
  .flexible-navbar {
    transition: padding-left 0.5s;
    padding-left: 270px;
    background: #fff;
  }
  
  #content{
    margin-left: 270px;
  }    
  
  
  .sidebar-fixed .logo-wrapper img{
    width: 100%;
    padding: 2.5rem;
  }
  
  .list-group-item {
    display: block !important;
    transition: background-color 0.3s;
  }
  
  .list-group-item:hover {
    color: #49505B;
    text-decoration: none;
    background-color: #f8f9fa
  }
  
  .list-group-item:hover {
    color: #49505B;
    text-decoration: none;
    background-color: #f8f9fa
  }
  
  
  .list-group .active {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }
  
  .card-title{
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .card-subtitle{
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .full {
    height: 70vh;
  }
  
  .bad-gateway-row {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 55%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  
  .card .view.gradient-card-header {
    padding: 1rem 1rem;
    text-align: center;
  }
  
  .card h3, .card.card-cascade h4 {
    margin-bottom: 0px;
  }
  
  .cascading-admin-card .admin-up {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: -20px;
  }
  
  .cascading-admin-card .admin-up .fa {
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  }
  
  .cascading-admin-card .admin-up .fa {
    padding: 1.7rem;
    font-size: 2rem;
    color: #fff;
    text-align: left;
    margin-right: 1rem;
    border-radius: 3px;
  }
  
  .cascading-admin-card .admin-up .data {
    float: right;
    margin-top: 2rem;
    text-align: right;
  }
  .admin-up .data p {
    color: #999999;
    font-size: 12px;
  }
  .classic-admin-card .card-body {
    color: #fff;
    margin-bottom: 0;
    padding: 0.9rem;
  }
  .classic-admin-card .card-body p {
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 0;
  }
  .classic-admin-card .card-body h4 {
    margin-top: 10px;
  }
  
  .form-inline{
    flex-flow: unset
  }
  
  .breadcrumb{
    margin: 0;
  }
  
  .activeClass .list-group-item {
    z-index: 5;
    color: #fff;
    border-color: #007bff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px !important;
    background-color: #007bff !important;
  }
  
  .page-footer{
    margin-left: 270px;
  }
  
  @media (max-width: 1199.98px) {
    .sidebar-fixed {
      display: none;
    }
    .flexible-content {
      padding-left: 0;
    }
    .flexible-navbar {
      padding-left: 10px;
    }
  
    #content{
      margin-left: 0px;
    }
  
    .page-footer{
      margin-left: 0px;
    }
    
    .card.cascading-admin-card {
      margin-top: 2.5rem;
    } 
  }
  
  @media (max-width: 576px) { 
    .card.cascading-admin-card {
      margin-top: 2.5rem;
    }
  
    #breadcrumb{
      flex-direction: column;
    }
  }
  
  .nav-item.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default GlobalStyle;
