import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Message, Segment, Container, Header, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Home = () => {
  let location = useLocation();
  const [message, setMessage] = useState();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

  return (
    <Container textAlign="center">
      {message && (
        <Message positive data-cy="save-article-message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
      <Segment>
        <Header>Hello {currentUser.email}</Header>
        <p>You are logged in as {currentUser.role}</p>
        <Button
          data-cy="create-article"
          color="black"
          id="save-result"
          as={Link}
          to="/article_form"
        >
          Create Article
        </Button>
      </Segment>
    </Container>
  );
};

export default Home;
