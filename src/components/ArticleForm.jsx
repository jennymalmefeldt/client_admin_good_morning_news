import React, { useState } from "react";
import { Form, Container } from "semantic-ui-react";
import Article from "../modules/articles";

const ArticleForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

    const toBase64 = (file) => {
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    }

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await Article.create(
      e.target.title.value,
      e.target.teaser.value,
      e.target.content.value,
      selectedCategory
      );
      setMessage(result);
      let encodedImage
      if (event.target.image.files[0]) {
        encodedImage = await toBase64(event.target.image.files[0])
      }
    };

  return (
    <Container>
      <Form data-cy="create-article" id="create-article" onSubmit={onSubmit}>
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
          <Form.Input
            fluid
            label="Image"
            placeholder="Image"
            type="file"
            data-cy="image"
            id="image"
          />
        </Form.Group>
        <Form.Button data-cy="save-article">Save Article</Form.Button>
      </Form>
      <p data-cy="save-article-message">{message}</p>
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
