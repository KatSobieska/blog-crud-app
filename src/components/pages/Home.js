import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Posts from "../features/Posts";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-start">
          <h2>Blog.app</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button href={"post/add"} variant="outline-info">
            Add post
          </Button>
        </Col>
      </Row>
      <Posts />
    </Container>
  );
};

export default Home;
