import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };
  // console.log(process.env);
  // console.log("UNSPLASH_ACCESS_KEY: ", UNSPLASH_ACCESS_KEY);

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div>
      <Header title='Images Gallery' />
      <Search handleSubmit={handleSearchSubmit} word={word} setWord={setWord} />
      <Container className='mt-4'>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className='pb-3'>
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
