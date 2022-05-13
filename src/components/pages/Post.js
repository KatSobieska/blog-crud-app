import { Col, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

  return (
    <div>
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
            <Button variant="outline-danger" size="sd">
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
