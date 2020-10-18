import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Message } from "semantic-ui-react";

const Home = () => {
  let location = useLocation();
  const [message, setMessage] = useState();

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

  return (
    <>
      {message && (
        <Message positive data-cy="save-article-message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
      <Button
        data-cy="create-article"
        id="save-result"
        as={Link}
        to="/article_form"
      >
        Create Article
      </Button>
    </>
  );
};

export default Home;
