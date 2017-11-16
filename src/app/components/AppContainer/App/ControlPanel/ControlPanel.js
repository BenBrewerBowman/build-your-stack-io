import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';


class ControlPanel extends Component {

  // handleChange = (event, this.props.state.userLoggedIn) => {
  //   this.setState({this.props.state.userLoggedIn: this.props.state.userLoggedIn});
  // };

  render() {
    return (
      <div>
        {/* user logged in control */}
        <Toggle
          label= {this.props.state.userLoggedIn ? "Logged In" : "Logged Out"}
          defaultToggled={false}
          // onToggle={this.handleChange(event, this.props.state.userLoggedIn)}
          labelPosition="right"
        />
        {/* notification control */}
      </div>
    );
  }

}

export default ControlPanel;
