import React, { useContext } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';

function BlogIndex() {
  const { state, dispatch } = useContext(PostsContext);
  const url = `http://blockbuster.dns.army:8001/posts/`;

  const deleteData = async (id) => {
    await fetch(`${url}${id}`, {
      method: 'DELETE',
    });
  };

  const deletePost = (id) => {
    deleteData(id);
    // dispatch({ type: 'REMOVE_POST', payload: id });
    dispatch({
      type: 'FETCH_SUCCESS',
      payload: {
        posts: state.posts.filter((post) => post.id !== id),
        isPending: false,
      },
    });
  };

  return (
    <ListGroup variant='flush'>
      {state.isPending && (
        <Spinner className='mx-auto' animation='border' variant='success' />
      )}
      {state.posts &&
        state.posts.map((post) => (
          <React.Fragment key={post.id}>
            <Link to={`/post/${post.id}`}>
              <ListGroup.Item action>{post.title}</ListGroup.Item>
            </Link>
            <button
              className='btn btn-danger'
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </React.Fragment>
        ))}
    </ListGroup>
  );
}

export default BlogIndex;
