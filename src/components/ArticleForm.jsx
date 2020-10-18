import React, { useState } from "react";
import { Form, Container, Checkbox, Segment, Message } from "semantic-ui-react";
import Article from "../modules/articles";
import { useHistory } from "react-router-dom";

const ArticleForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const history = useHistory();

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await Article.create(
      e.target.title.value,
      e.target.teaser.value,
      e.target.content.value,
      selectedCategory,
      e.target.premium.checked
    );

    if (result.status === 200) {
      history.push("/", { message: result.data.message });
    } else {
      setMessage(result);
    }
  };

  return (
    <Container>
      <Segment>
        <Form
          widths="equal"
          data-cy="form-article"
          id="create-article"
          onSubmit={onSubmit}
        >
          <Form.Group widths="equal" data-cy="form-article">
            <Form.Input
              fluid
              label="Title"
              placeholder="Title"
              id="title"
              data-cy="title"
            />
            <Form.Input
              fluid
              label="Teaser"
              placeholder="Teaser"
              data-cy="teaser"
              id="teaser"
            />
            <Form.Select
              fluid
              label="Category"
              options={options}
              onChange={(e, data) => {
                handleCategoryChange(data.value);
              }}
              placeholder="Gender"
              data-cy="category"
              id="category"
            />
            <Form.TextArea
              label="Article"
              placeholder="..."
              data-cy="content"
              id="content"
            />
            <Form.Field>
              <Checkbox
                toggle
                data-cy="premium"
                label="Premium Article?"
                id="premium"
              />
            </Form.Field>
          </Form.Group>
          <Form.Button color="blue" data-cy="save-article">
            Save Article
          </Form.Button>
        </Form>
        {message && (
          <Message negative data-cy="save-article-message">
            <Message.Header>{message}</Message.Header>
          </Message>
        )}
      </Segment>
    </Container>
  );
};

const options = [
  { key: "m", text: "Sports", value: "sports" },
  { key: "f", text: "Entertainment", value: "entertainment" },
  { key: "o", text: "Weather", value: "weather" },
  { key: "o", text: "Business", value: "business" },
  { key: "o", text: "News", value: "news" },
];

export default ArticleForm;
