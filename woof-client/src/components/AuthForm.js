import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      signUp,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div className="login-form">
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {heading}
            </Header>
            {errors.message && (
              <div className="alert alert-danger">{errors.message}</div>
            )}
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  type="text"
                  value={email}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  value={password}
                />
                {signUp && (
                  <div>
                    <Form.Input
                      fluid
                      icon="at"
                      iconPosition="left"
                      placeholder="Username"
                      id="username"
                      name="username"
                      onChange={this.handleChange}
                      type="text"
                      value={username}
                    />
                    <Form.Input
                      fluid
                      icon="photo"
                      iconPosition="left"
                      placeholder="Avatar Image Url"
                      id="image-url"
                      name="profileImageUrl"
                      onChange={this.handleChange}
                      type="text"
                      value={profileImageUrl}
                    />
                  </div>
                )}

                <Button color="teal" fluid size="large">
                  {buttonText}
                </Button>
              </Segment>
            </Form>
            {!signUp && (
              <Message>
                New to us? <Link to="/signup"> Sign Up </Link>
              </Message>
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
AuthForm.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};

export default AuthForm;
