import React, { Component } from 'react';
// material-ui
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar'
import Popover from 'material-ui/Popover';
// icons
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import AddIcon from 'material-ui/svg-icons/content/add';
import HelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import LockOutlineIcon from 'material-ui/svg-icons/action/lock-outline';
import NotificationFalseIcon from 'material-ui/svg-icons/social/notifications-none';
import NotificationTrueIcon from 'material-ui/svg-icons/social/notifications-active';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import StarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import PersonOutlineIcon from 'material-ui/svg-icons/social/person-outline';
// images
import NavBarLogo from './images/NavBarLogo.png';
// utils
import DesktopBreakpoint from 'app/utils/responsive-utils/desktop-breakpoint';
// styles
import { Colors } from 'app/shared-styles';


// styling
const colors = {
  navigationBackgroundColor: Colors.techGrey,
  navigationPrimaryColor: Colors.logoPurple,
}
const styles = {
  navBarContainer: {
    backgroundColor: colors.navigationBackgroundColor,
    color: colors.navigationPrimaryColor
  },
  navBarGroup: {
    margin: 20,
    float: 'none',
  },
  dropDownTriangle: {
    fontSize: 10,
    paddingLeft: 5
  },
  searchBar: {
    display: "flex",
    margin: '0 auto',
    maxHeight: 42,
  },
  addIcon: {
    marginRight: 10,
    color: colors.navigationPrimaryColor,
    cursor: 'pointer'
  },
  notificationsIcon: {
    cursor: 'pointer',
    color: colors.navigationPrimaryColor
  },
  accountIcon: {
    color: colors.navigationPrimaryColor
  }
}


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login/ Sign up" />
    );
  }
}


class ProfileNavElement extends Component {

  state = {
    accountDropDownOpen: false
  }

  handleTouchTapAccount = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      accountDropDownOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      accountDropDownOpen: false
    });
  };

  render() {
    return (
      <div style={{height: 24}}>
        {/* account icon and dropdown */}
        <AccountIcon
          onClick={this.handleTouchTapAccount}
          style={styles.accountIcon}
        />
        <Popover
          open={this.state.accountDropDownOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="My Profile" rightIcon={<PersonOutlineIcon/>}/>
            <MenuItem primaryText="My Favorites" rightIcon={<StarBorderIcon/>} />
            <MenuItem primaryText="My Preferences" rightIcon={<SettingsIcon/>}/>
            <Divider />
            <MenuItem primaryText="Help" rightIcon={<HelpOutlineIcon/>}/>
            <MenuItem primaryText="Sign Out" rightIcon={<LockOutlineIcon/>}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}


class NavigationBar extends Component {

  state = {
    dataSource: [],
    tutorialDropDownOpen: false,
    addButtonDropDownOpen: false
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
      <DesktopBreakpoint>
        <div style={styles.navBarContainer}>
          <Toolbar>
            {/* navbar logo */}
            <ToolbarGroup firstChild={true} style={styles.navBarGroup}>
              {/* <ToolbarTitle text="BuildYourStack.io" /> */}
              <img src={NavBarLogo} alt='BuildYourStack.io logo' />
            </ToolbarGroup>

            <ToolbarGroup lastChild={true} style={styles.navBarGroup}>

              {/* tutorials dropdown */}
              <div
                onClick={this.handleTouchTapTutorial}
                style={{cursor: 'pointer', marginRight: 23}}
              >
                <span>Tutorials{(this.state.tutorialDropDownOpen) ? <span style={styles.dropDownTriangle}>△</span> : <span style={styles.dropDownTriangle}>▽</span>}</span>
              </div>
              <Popover
                open={this.state.tutorialDropDownOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu >
                  <MenuItem primaryText="Latest and Greatest" />
                  <MenuItem primaryText="Highest Rated" />
                  <Divider />
                  <MenuItem primaryText="Top Free" />
                  <MenuItem primaryText="Top Paid" />
                  <Divider />
                  <MenuItem primaryText="Beginner" />
                  <MenuItem primaryText="Intermediate" />
                  <MenuItem primaryText="Advanced" />
                </Menu>
              </Popover>

              <div style={{marginRight: 28, cursor: 'pointer'}}>Tags</div>

              <SearchBar
                onChange={this.handleUpdateInput}
                dataSource={this.state.dataSource}
                onRequestSearch={() => console.log('onRequestSearch')}
                maxSearchResults={5}
                style={styles.searchBar}
              />

              <ToolbarSeparator style={{margin: 15}}/>

              {/* add tutorial */}
              <AddIcon
                onClick={this.handleTouchTapAddButton}
                style={styles.addIcon}
              />
              <Popover
                open={this.state.addButtonDropDownOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu>
                  <MenuItem primaryText="Add a Tutorial" rightIcon={<AddCircleOutlineIcon/>}/>
                </Menu>
              </Popover>

              {/* notifications */}
              { (this.props.state.notifications > 0) ? <NotificationTrueIcon style={styles.notificationsIcon}/> : <NotificationFalseIcon style={styles.notificationsIcon}/>}
              <div style={{display: "true", marginRight: 18}}>{this.props.state.notifications}</div>

              {(this.props.state.userLoggedIn)? <div style={{marginRight: 5}}>{this.props.state.userName}</div> : null}
              {/* {(this.props.state.userLoggedIn)? <ProfileNavElement style={{paddingTop: 10}}/> : <Login />} */}

              <ProfileNavElement />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </DesktopBreakpoint>
    );
  }
}

export default NavigationBar;
