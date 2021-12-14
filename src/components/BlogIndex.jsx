import React, { useContext } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';

function BlogIndex() {
  const { posts, dispatch } = useContext(PostsContext);
  return (
    <ListGroup variant='flush'>
      {posts.isPending && (
        <Spinner className='mx-auto' animation='border' variant='success' />
      )}
      {posts.data &&
        posts.data.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <ListGroup.Item action>{post.title}</ListGroup.Item>
          </Link>
        ))}
    </ListGroup>
  );
}

export default BlogIndex;
