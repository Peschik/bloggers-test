import { FC } from "react";
import "./postList.scss";
import { IPost, IBlogger } from "../types/types";
import { quote } from "../components/index";
import { Container, Row, Col } from "react-bootstrap";
interface PostListProps {
  posts: IPost[];
  blogger: IBlogger;
}

const PostList: FC<PostListProps> = ({ posts, blogger }) => {
  const elements = posts.map((item) => {
    return (
      <li key={item.id}>
        <h3>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3>
        <span>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</span>
      </li>
    );
  });
  return (
    <>
      <Container>
        <Row className="posts__header">
          <Col className="image-quote" md={2} lg={3}>
            <img src={quote} alt="qoute" />
          </Col>
          <Col md={9} lg={9}>
            <h2 className="post__header">
              {blogger ? "3 актуальных поста " + blogger.name : ""}
            </h2>
          </Col>
        </Row>

        <Row className="posts">
          <Col className="posts__content" lg={9}>
            {elements}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostList;
