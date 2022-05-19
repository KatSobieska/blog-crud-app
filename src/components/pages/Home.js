import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Posts from "../features/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-start">
          <h2>Blog.app</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to={"post/add"} style={{ textDecoration: "none" }}>
            <Button
              className="d-flex align-items-center"
              variant="outline-info"
            >
              Add post
            </Button>
          </Link>
        </Col>
      </Row>
      <Posts />
    </Container>
  );
};

export default Home;
