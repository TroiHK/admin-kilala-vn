/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import HomePage from 'containers/HomePage/Loadable';
import UsersPage from 'containers/UsersPage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import PostsPage from 'containers/PostsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import SideNavigation from 'components/SideNavigation';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="app-wrapper flexible-content">
      <Header />
      <SideNavigation />
      <main id="content" className="p-5">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
