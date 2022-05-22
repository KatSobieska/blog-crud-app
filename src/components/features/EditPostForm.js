import { useDispatch, useSelector } from "react-redux";
import PostForm from "./PostForm";
import { getPostById } from "../../redux/postsRedux";
import { useNavigate, useParams } from "react-router";
import { editPost } from "../../redux/postsRedux";
import { Navigate } from "react-router";
import { Row, Col } from "react-bootstrap";

const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, postId }));
    navigate("/");
  };

  if (!postData) return <Navigate to="/" />;
  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h2>EDIT POST</h2>
        <PostForm
          action={handleSubmit}
          actionText="Edit post"
          title={postData.title}
          author={postData.author}
          publishedDate={postData.publishedDate}
          shortDescription={postData.shortDescription}
          content={postData.content}
          id={postId}
          category={postData.category}
        />
      </Col>
    </Row>
  );
};

export default EditPostForm;
