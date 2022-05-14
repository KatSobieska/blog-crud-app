import { Button } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <section>
      <Row className="mt-5 d-flex justify-content-around">
        {posts.map((post) => (
          <Col key={post.id} md={4}>
            <Card className="mb-3" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published:</b> {post.publishedDate}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={"/post/" + post.id}>
                  <Button>Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Posts;
