import React, { Component } from 'react';
// delete later once Welcome is gone
import './App.style.css';
import {
  AboutPage,
  NavigationBar,
  Footer
} from 'app/components/index.js';
import ControlPanel from './ControlPanel/ControlPanel';
// images
import logo from './images/logo.svg';


class App extends Component {

  state = {
    mobileView: false,
    tabletView: false,
    desktopView: true,
    userLoggedIn: true,
    userName: "BenBrewerBowman",
    notifications: 1
  };

  render() {
    return (
      <div style={{width: "100%"}}>
        {/* only use for front end design. Replace with backend control from firebase */}
        <ControlPanel state={this.state}/>
        {/* static navigation bar on all pages */}
        <NavigationBar state={this.state}/>

        <AboutPage />

        <Footer />
      </div>
    );
  }
}

export default App;
