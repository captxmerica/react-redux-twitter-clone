import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import { Form, TextArea, Button } from "semantic-ui-react";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleNewMessage = event => {
    event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <Form onSubmit={this.handleNewMessage} style={{ margin: "2em 5em" }}>
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
        <h3>New Woof</h3>
        <Form.Field>
          <TextArea
            type="text"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            placeholder="160 char max"
            style={{ width: "60%" }}
          />
        </Form.Field>

        <Button primary type="submit">
          Add my message!
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
