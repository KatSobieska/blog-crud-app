import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [mainContent, setMainContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, mainContent })
    );
    navigate("/");
  };
  return (
    <Col md={8}>
      <Form>
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
            value={mainContent}
            onChange={(e) => setMainContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default AddPostForm;
