import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";
import { Button } from 'semantic-ui-react'


const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Welcome to Woof</h1>
        <h4>New? Click below to get started</h4>
        <Button>
          <Link to="/signup" className='sign-link'>
            Sign up here
           </Link>
        </Button>




      </div>
    );
  }
  return (
    <div>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;
