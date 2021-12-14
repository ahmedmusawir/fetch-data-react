import React, { useState, useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogIndex() {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState('http://blockbuster.dns.army:8001/posts');
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    // fetch('http://blockbuster.dns.army:8001/posts')
    //   .then((res) => res.json())
    //   .then((json) => setPosts(json));

    const fetchData = async () => {
      setIsPending(true);

      const res = await fetch(url);
      const json = await res.json();

      setIsPending(false);
      setPosts(json);
    };

    fetchData();
  }, [url]);

  return (
    <ListGroup variant='flush'>
      {isPending && (
        <Spinner className='mx-auto' animation='border' variant='success' />
      )}
      {posts &&
        posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <ListGroup.Item action>{post.title}</ListGroup.Item>
          </Link>
        ))}
    </ListGroup>
  );
}

export default BlogIndex;
