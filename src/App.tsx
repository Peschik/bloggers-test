import "./style.scss";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import AppHeader from "./components/appHeader/AppHeader";
import { BloggerSlider } from "./components/bloggerSlider/BloggerSlider";
import PostList from "./components/postList/PostList";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IBlogger, IPost } from "./types/types";
import { backgroundImage } from "./components";
import Spinner from "./components/spinner/Spinner";
import ErrorMessage from "./components/error/Error";

const App: FC = () => {
  const [bloggers, setBloggers] = useState<IBlogger[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [indexActiveSlide, setIndexActiveSlide] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    fetchBloggers();
    fetchPosts();
  }, []);

  async function fetchBloggers() {
    try {
      setLoading(true);
      const response = await axios.get<IBlogger[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setBloggers(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
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
    setIndexActiveSlide(id);
  };

  const activePosts: IPost[] = posts
    .filter((item) => item.userId === indexActiveSlide + 1)
    .filter((item, index) => index < 3);

  const errorMessage = error ? <ErrorMessage /> : "";
  const spinner = loading ? <Spinner /> : "";
  return (
    <div className="container">
      <AppHeader />
      <ErrorBoundary>
        {errorMessage}
        {spinner}
        {!error && !loading ? (
          <BloggerSlider
            bloggers={bloggers}
            indexActiveSlide={indexActiveSlide}
            onActivateBlogger={onActivateBlogger}
          />
        ) : (
          ""
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <PostList posts={activePosts} blogger={bloggers[indexActiveSlide]} />
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
