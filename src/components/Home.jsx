import React from "react";
import { Button } from "semantic-ui-react";
import { Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Button 
      data-cy="create-article" 
      id="save-result"
      as={Link} 
      to="/article_form">
        Create Article
      </Button>
    </>
  );
};

export default Home;
