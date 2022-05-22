import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <section>
      <Row className="justify-content-md-center">
        <Col md={9}>
          <h1 className="mb-5">All Categories</h1>
          {categories.map((category, index) => (
            <Col key={index} className="mb-1">
              <Card style={{ maxHeight: "20rem" }}>
                <Card.Body>
                  <Link to={"/category/" + category}>
                    <Card.Title>{category}</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default Categories;
