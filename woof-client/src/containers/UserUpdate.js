import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { userUpdate, setCurrentUser } from "../store/actions/auth";

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.user.id,
      firstName: "",
      lastName: "",
      bio: "",
      profileImageUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.userUpdate(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      bio: "",
      profileImageUrl: ""
    });
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Avatar URL</label>
          <input
            placeholder="Insert image url"
            name="profileImageUrl"
            value={this.state.profileImageUrl}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Bio</label>
          <input
            placeholder="Tell us about yourself"
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Update</Button>
      </Form>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { userUpdate, setCurrentUser })(
  UserUpdate
);
