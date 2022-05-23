import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostByCategory } from "../../redux/postsRedux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { dateToStr } from "../../utils/dateToStr";
import { Link } from "react-router-dom";

const FilteredCategory = () => {
  const { category } = useParams();
  const postsDataByCategory = useSelector((state) =>
    getPostByCategory(state, category)
  );

  if (postsDataByCategory.length === 0)
    return (
      <div>
        <h2 className="mb-4">Category: {category}</h2>
        <p>No posts in this category</p>
      </div>
    );
  return (
    <section>
      <Row className="mt-5">
        <h2 className="mb-5">Category: {category}</h2>
        {postsDataByCategory.map((post) => (
          <Col key={post.id} md={4}>
            <Card className="mb-3" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published:</b> {dateToStr(post.publishedDate)}
                </Card.Text>
                <Card.Text>
                  <b>Category:</b> {post.category}
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

export default FilteredCategory;
