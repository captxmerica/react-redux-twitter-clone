import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";
import { Grid } from "semantic-ui-react";

const MessageTimeline = props => {
  return (
    <Grid centered>
      <Grid.Column width={4}>
        <UserAside
          profileImageUrl={props.profileImageUrl}
          username={props.username}
        />
      </Grid.Column>
      <Grid.Column width={9}>
        <MessageList />
      </Grid.Column>
    </Grid>
  );
};

export default MessageTimeline;
