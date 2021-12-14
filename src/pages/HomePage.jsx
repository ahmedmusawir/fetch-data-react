import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import BlogIndex from '../components/BlogIndex';

function HomePage() {
  return (
    <Page wide={true} pageTitle='React Fetch'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h4>Blog Index</h4>
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
