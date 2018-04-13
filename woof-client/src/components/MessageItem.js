import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { Comment } from "semantic-ui-react";

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  removeMessage,
  isCorrectUser
}) => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as="a" src={profileImageUrl || DefaultProfileImg} />
      <Comment.Content>
        <Comment.Author>
          <Link to="/">@{username} &nbsp;</Link>{" "}
          <Comment.Metadata>
            <Moment className="text-muted" format="Do MMM YYYY">
              {date}
            </Moment>
          </Comment.Metadata>
        </Comment.Author>

        <Comment.Text>{text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          <Comment.Action>Save</Comment.Action>
          {isCorrectUser && (
            <Comment.Action onClick={removeMessage}>Delete</Comment.Action>
          )}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default MessageItem;
