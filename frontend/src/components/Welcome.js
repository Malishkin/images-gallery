import React from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <Row >
          <Col xs={12} md={12}>
        <h1>Images Gallery</h1>
        <p>
          This is a simple application that retrieves photos using Unsplash API
          in order to start enter any search term in the input field.
        </p>
        <p>
          <Button variant='primary' href='https://unsplash.com' target='_blank'>
            Learn more
          </Button>
        </p></Col>
        </Row>
    </Container>
  );
};

export default Welcome;
