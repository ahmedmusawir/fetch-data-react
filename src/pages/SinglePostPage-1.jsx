import React, { useState, useEffect } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Spinner } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { useParams } from 'react-router-dom';

function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [url, setUrl] = useState(
    'http://blockbuster.dns.army:8001/posts/' + id
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      const res = await fetch(url);
      const json = await res.json();

      setIsPending(false);
      setPost(json);
    };

    fetchData();
  }, []);
  return (
    <Page wide={true} pageTitle='Movie Form'>
      {isPending && (
        // <Content width='w-100' cssClassNames='bg-light text-center'>
        <Content width='w-100' cssClassNames='h-100 row align-items-center'>
          <Spinner className='mx-auto' animation='border' variant='info' />
        </Content>
      )}
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h1>{post.title}</h1>
            <h4>Post ID: {id}</h4>
            <p>{post.body}</p>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default SinglePostPage;
