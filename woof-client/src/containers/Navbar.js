import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import {
  Button,
  Menu,
  Icon
} from 'semantic-ui-react';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <Menu
        size='large'
        borderless
      >

        <Menu.Item >
          <Link to="/" className="navbar-brand">
            <Icon inverted color='black' name='paw' size='big' />
          </Link>
        </Menu.Item>



        {this.props.currentUser.isAuthenticated ? (
          <Menu.Item position='right' >

            <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
              <Button animated>
                <Button.Content visible>New Woof</Button.Content>
                <Button.Content hidden>
                  <Icon name='quote left' /> <Icon name='quote right' />
                </Button.Content>
              </Button>
            </Link>


            <Button animated='vertical' style={{ marginLeft: '0.5em' }}>
              <a onClick={this.logout}>
                <Button.Content visible>Logout</Button.Content>
                <Button.Content hidden>
                  <Icon name='sign out' />
                </Button.Content>
              </a>
            </Button>

          </Menu.Item>
        ) : (
            <Menu.Item position='right' >
              <Button ><Link to="/signin">Log in</Link></Button>
              <Button style={{ marginLeft: '0.5em' }}><Link to="/signup">Sign up</Link></Button>
            </Menu.Item>
          )}


      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
