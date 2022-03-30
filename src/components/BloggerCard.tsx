import React, {FC, MouseEventHandler} from 'react';
import { IBlogger } from '../types/types';
import './bloggerCard.scss'

interface BloggerCardProps {
    blogger: IBlogger;
    activeBlogger: number;
    onActivateBlogger: (id: number) => void
}



const BloggerCard: FC<BloggerCardProps> = ({blogger, activeBlogger, onActivateBlogger}) => {

    const clickHandler = (id: number) => {
        onActivateBlogger(id)
    }
    return (
        <div onClick={() => clickHandler(blogger.id)} className={blogger.id === activeBlogger ? 'blogger__card active' : 'blogger__card'}
            >
            <img src={`https://i.pravatar.cc/300?img=${blogger.id}`} alt={blogger.name}/>
            <p>{blogger.name}</p>
            <p>{blogger.company ? blogger.company.name : ''}</p>
        </div>
        )
}


export default BloggerCard;