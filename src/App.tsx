import "./style.scss";
import { backgroundImage } from "./components";
import PostList from "./components/PostList";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IBlogger, IPost } from "./types/types";
import { BloggerSlider } from "./components/bloggerSlider/BloggerSlider";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

const App: FC = () => {
  const [bloggers, setBloggers] = useState<IBlogger[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [activeId, setActiveId] = useState<number>(1);
  useEffect(() => {
    fetchBloggers();
    fetchPosts();
  }, []);

  async function fetchBloggers() {
    try {
      const response = await axios.get<IBlogger[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setBloggers(response.data);
    } catch (e) {
      throw e;
    }
  }
  async function fetchPosts() {
    try {
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (e) {
      throw e;
    }
  }

  const onActivateBlogger = (id: number): void => {
    setActiveId(id);
  };

  const activePosts: IPost[] = posts
    .filter((item) => item.userId === activeId + 1)
    .filter((item, index) => index < 3);

  return (
    <div className="container">
      <h2 className="heading">Наши топ-блогеры</h2>
      <p className="specialists">
        Лучше специалисты в своем деле, <br />
        средний опыт работы в профессии - 27 лет
      </p>
      <ErrorBoundary>
        <BloggerSlider
          bloggers={bloggers}
          activeId={activeId}
          onActivateBlogger={onActivateBlogger}
        />
      </ErrorBoundary>
      <ErrorBoundary>
        <PostList posts={activePosts} blogger={bloggers[activeId]} />
      </ErrorBoundary>
      <img
        className="background__image"
        src={backgroundImage}
        alt="background"
      />
      <img
        className="background__image lower"
        src={backgroundImage}
        alt="background"
      />
    </div>
  );
};

export default App;
