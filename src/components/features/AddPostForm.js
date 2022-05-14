import { Button, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

const AddPostForm = () => {
  return (
    <Col md={8}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter author" />
          <Form.Label>Published</Form.Label>
          <Form.Control type="date" placeholder="Enter date" />
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Leave a comment here"
          />
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Leave a comment here"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Col>
  );
};

export default AddPostForm;
