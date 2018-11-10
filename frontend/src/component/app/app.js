import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingContainer from '../landing/landing';
import DashboardContainer from '../dashboard/dashboard';
import SettingsContainer from '../settings/settings';
import createAppStore from '../../lib/store';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const store = createAppStore();

export default class App extends React.Component {

  render() {
    return (
      <section id="redux-application">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <h1>Photo Share</h1>
                <Navbar>
                  <Nav>
                    <LinkContainer to="/welcome/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/welcome/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                      <NavItem>Profile</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/dashboard">
                      <NavItem>Dashboard</NavItem>
                    </LinkContainer>
                  </Nav>
                </Navbar>

              </header>
              <main>
                <Route exact path='/welcome/:auth' component={LandingContainer} />
                <Route exact path='/settings' component={SettingsContainer} />
                <Route exact path='/dashboard' component={DashboardContainer} />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}
