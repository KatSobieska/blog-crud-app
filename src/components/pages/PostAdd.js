import { Col, Row } from "react-bootstrap";
import AddPostForm from "../features/AddPostForm";

const PostAdd = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h2>ADD POST</h2>
        <AddPostForm />
      </Col>
    </Row>
  );
};

export default PostAdd;
