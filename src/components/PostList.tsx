import {FC} from 'react';
import './postList.scss';
import {IPost} from '../types/types'

interface PostListProps {
    posts: IPost[]
}

const PostList:FC<PostListProps> = ({posts}) => {
    const elements = posts.map(item => {
        return (
                <>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
                </>
        )
    })
    return (
        <div className='actual__post'>
            <div className="post-text">
                 {elements}
            </div>
        </div>
    );
};

export default PostList;