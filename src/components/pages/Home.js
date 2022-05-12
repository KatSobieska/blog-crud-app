import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-start">
          <h2>Blog.app</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="outline-info">Add post</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
