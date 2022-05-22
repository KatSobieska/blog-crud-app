import { Col, Row, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../redux/postsRedux";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dateToStr } from "../../utils/dateToStr";

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleRemove = () => {
    dispatch(removePost(postId));
  };

  if (!postData) return <Navigate to="/" />;
  else
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove this post from the app. Are
            you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="justify-content-md-center">
          <Col md={6} className="d-flex justify-content-between">
            <h1>{postData.title}</h1>
            <span>
              <Link to={"/post/edit/" + postId}>
                <Button
                  variant="outline-info"
                  size="sd"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Edit
                </Button>
              </Link>
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
              <b>Published: </b> {dateToStr(postData.publishedDate)}
            </p>
            <p dangerouslySetInnerHTML={{ __html: postData.content }} />
          </Col>
        </Row>
      </div>
    );
};

export default Post;
