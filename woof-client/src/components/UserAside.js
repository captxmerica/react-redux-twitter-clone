import React from "react";
import { Card, Image } from "semantic-ui-react";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { Link } from "react-router-dom";

const UserAside = ({ profileImageUrl, username }) => (
  <Card>
    <Image src={profileImageUrl || DefaultProfileImg} />
    <Card.Content>
      <Card.Header>@{username}</Card.Header>
      <Link to="/update">Update Profile</Link>
    </Card.Content>
  </Card>
);

export default UserAside;
