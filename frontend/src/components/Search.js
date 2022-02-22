import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Search = ({ handleSubmit, word, setWord }) => {
  return (
    <Container className='mt-4'>
      <Form onSubmit={handleSubmit}>
        <Row className='justify-content-center'>
          <Col xs={6} md={4}>
            <Form.Control
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder='Search for new image...'
            />
          </Col>
          <Col xs={4} md={2}>
            <Button variant='primary' type='submit'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
