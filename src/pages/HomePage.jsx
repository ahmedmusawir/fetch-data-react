import React, { useEffect, useReducer } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import BlogIndex from '../components/BlogIndex';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Page wide={true} pageTitle='React Fetch'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light clearfix'>
            <h4>Blog Index</h4>
            <Link to='/add-post' className='btn btn-info float-right'>
              Add New Post
            </Link>
          </Content>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames=''>
            <BlogIndex />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default HomePage;
