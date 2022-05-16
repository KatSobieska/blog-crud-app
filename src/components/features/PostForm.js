import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const PostForm = ({ action, actionText, ...props }) => {
  const id = props.id;
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content, id });
  };

  return (
    <Col md={8}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Form.Label>Published</Form.Label>
          <Form.Control
            type="text"
            placeholder="DD-MM-YYYY"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Leave a comment here"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Leave a comment here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" value={actionText} className="mt-3">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default PostForm;
