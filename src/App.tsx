  import "./style.scss";
  import {
    quote,
    backgroundImage,
  } from "./components";
  import PostList from "./components/PostList";
  import Slider from "./components/slider/Slider";
  import {FC, useEffect, useState } from 'react'
  import axios from 'axios';
  import {IBlogger, IPost} from './types/types'
import { act } from "react-dom/test-utils";

  const App:FC = () => {
    const [bloggers, setBloggers ] = useState<IBlogger[]>([])
    const [posts, setPosts ] = useState<IPost[]>([])
    const [activeBlogger, setActiveBlogger ] = useState<number>(1)

    useEffect(() => {
      fetchBloggers()
      fetchPosts()
    }, [])

    async function fetchBloggers() {
      try {
        const response = await axios.get<IBlogger[]>('https://jsonplaceholder.typicode.com/users')
        setBloggers(response.data)
      } catch (e) {
        alert(e)
      }
    }

    async function fetchPosts() {
      try {
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (e) {
        alert(e)
      }
    }

    const onActivateBlogger = (id: number) => {
      setActiveBlogger(id)
    }

  
    const activePosts = posts.filter((item) => item.userId === activeBlogger).filter((item, index) => index < 3)

    return (
      <>
        <img
          className="background__image"
          src={backgroundImage}
          alt="background"
        />
        <div className="app">
          <h2>Наши топ-блогеры</h2>
          <p className="specialists">
            Лучше специалисты в своем деле, <br />
            средний опыт работы в профессии - 27 лет
          </p>
          <Slider 
            bloggers={bloggers}
            activeBlogger={activeBlogger}
            onActivateBlogger={onActivateBlogger}/>
          <div className="posts">
            <div className="post-header">
              <img src={quote} alt="qoute" />
              <h2>3 актуальных поста </h2>
            </div>
            <img
              className="background__image lower"
              src={backgroundImage}
              alt="background"
            />
          </div>
        </div>
        <div className="post-list">
          <PostList posts={activePosts}/>
        </div>
      </>
    );
  };

  export default App;
