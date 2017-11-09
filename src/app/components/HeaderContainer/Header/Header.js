import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Menu from 'material-ui/Menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import SearchBar from 'material-ui-search-bar'
import Popover from 'material-ui/Popover';
// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import NotificationFalseIcon from 'material-ui/svg-icons/social/notifications-none';
import NotificationTrueIcon from 'material-ui/svg-icons/social/notifications-active';
import AddIcon from 'material-ui/svg-icons/content/add';
import ArrowDropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';

import './Header.style.css';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login/ Sign up" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    // targetOrigin={{horizontal: 'right', vertical: 'top'}}
    // anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Preferences" rightIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
    <MenuItem primaryText="My Favorites" />
    <MenuItem primaryText="Sign Out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';


const rightButtons = (loggedState) => {

  return(
    <div className="VertMiddle">

        {/* <Link href="/"> */}
            <FlatButton style={{hoverColor: "black"}} label="Search" />
        {/* </Link> */}
        {/* <Link href="/Login"> */}
            <FlatButton label="Notifications" />
        {/* </Link> */}
        {/* <Link href="/Login"> */}
            {loggedState? <Logged /> : <Login />}
        {/* </Link>  */}
    </div>
  );
};

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
  state = {
    logged: false,
    notification: false,
    userName: "BenBrewerBowman",
    dataSource: [],
    tutorialDropDownOpen: false,
    accountDropDownOpen: false,
    addButtonDropDownOpen: false
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
        value,
        value,
        value,
        value,
      ],
    });
  };

  handleTouchTapTutorial = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      tutorialDropDownOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleTouchTapAccount = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      accountDropDownOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleTouchTapAddButton = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      addButtonDropDownOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      tutorialDropDownOpen: false,
      accountDropDownOpen: false,
      addButtonDropDownOpen: false,
    });
  };

  render() {
    return (
      <div style={{width: '100%', overflow: 'hidden'}}>
        <Toggle
          label= {this.state.logged ? "Logged In" : "Logged Out"}
          defaultToggled={false}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{padding: 20}}
        />
        <Toolbar>
          <ToolbarGroup firstChild={true} style={{margin: 20}}>
            <ToolbarTitle text="BuildYourStack.io" />
          </ToolbarGroup>

          <ToolbarGroup lastChild={true} style={{margin: 10}}>

            <div
              onClick={this.handleTouchTapTutorial}
              style={{cursor: 'pointer'}}
            >
              <span>Tutorials</span>
            </div>
            <Popover
              open={this.state.tutorialDropDownOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
              </Menu>
            </Popover>
            <ArrowDropDownIcon style={{marginRight: 28, cursor: 'pointer'}}/>

            <div style={{marginRight: 38}}>Tags</div>

            <SearchBar
              onChange={this.handleUpdateInput}
              dataSource={this.state.dataSource}
              onRequestSearch={() => console.log('onRequestSearch')}
              maxSearchResults={5}
              style={{
                margin: '0 auto',
                maxWidth: 800,
                maxHeight: 42
              }}
            />

            <ToolbarSeparator style={{margin: 15}}/>

            <AddIcon
              onClick={this.handleTouchTapAddButton}
              style={{marginRight: 10, cursor: 'pointer'}}
            />
            <Popover
              open={this.state.addButtonDropDownOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Add a Tutorial" />
              </Menu>
            </Popover>

            {this.state.logged? <NotificationTrueIcon style={{width: 28,height: 28}}/> : <NotificationFalseIcon />}
            <div style={{display: "true", marginRight: 25}}>1</div>
            <div>{this.state.userName}</div>
            {/* <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <AccountIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="My Preferences" />
              <MenuItem primaryText="My Favorites" />
              <Divider />
              <MenuItem primaryText="Sign Out" />
            </IconMenu> */}

            <AccountIcon
              onClick={this.handleTouchTapAccount}
              style={{marginRight: 10, cursor: 'pointer'}}
            />
            <Popover
              open={this.state.accountDropDownOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="My Preferences" />
                <MenuItem primaryText="My Favorites" />
                <Divider />
                <MenuItem primaryText="Sign Out" />
              </Menu>
            </Popover>

          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default Header;
