import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {
  const id = props.id;
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");

  const handleSubmit = () => {
    action({ title, author, publishedDate, shortDescription, content, id });
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Col md={8}>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              This field is required with at least 3 characters
            </small>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Published</Form.Label>

          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            placeholderText="MM-DD-YYYY"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Leave a comment here"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Main Content</Form.Label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Leave a comment here"
          />
        </Form.Group>
        <Button type="submit" value={actionText} className="mt-3">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default PostForm;
