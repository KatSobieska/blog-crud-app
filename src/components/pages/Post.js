import { Col, Row, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!postData) return <Navigate to="/" />;
  else
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger">Remove</Button>
          </Modal.Footer>
        </Modal>
        <Row className="justify-content-md-center">
          <Col md={6} className="d-flex justify-content-between">
            <h1>{postData.title}</h1>
            <span>
              <Button
                variant="outline-info"
                size="sd"
                href={"/post/edit/" + postId}
                style={{
                  marginRight: "10px",
                }}
              >
                Edit
              </Button>
              <Button variant="outline-danger" size="sd" onClick={handleShow}>
                Delete
              </Button>
            </span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <p>
              <b>Author: </b>
              {postData.author}
            </p>
            <p>
              <b>Published: </b> {postData.publishedDate}
            </p>
            <p>{postData.content}</p>
          </Col>
        </Row>
      </div>
    );
};

export default Post;
