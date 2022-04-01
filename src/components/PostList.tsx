import {FC} from 'react';
import './postList.scss';
import {IPost, IBlogger} from '../types/types'
import {quote} from '../components/index'
import { Container, Row, Col } from 'react-bootstrap'
interface PostListProps {
    posts: IPost[]
    blogger: IBlogger
}

const PostList:FC<PostListProps> = ({posts, blogger}) => {

    const elements = posts.map(item => {
        return (
                <>
                <h3>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3>
                <span>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</span>
                </>
        )
    })
    return (
        <>  
            
            <Container>
                <Row className='align-items-lg-start mt-4'>
                    <Col className='image-quote' lg={3}>
                        <img src={quote} alt="qoute" />
                    </Col>
                    <Col lg={9}>    
                        <h2 className='post__header'>{blogger ? '3 актуальных поста ' + blogger.name : ''}</h2>   
                    </Col>
                </Row>
                
                <Row className='mt-4'>
                    <Col lg={3} />
                    <Col className='col align-items-end' lg={9}>
                    {elements}
                    </Col>
                </Row>
            </Container>   
        </>
        
    );
};

export default PostList;