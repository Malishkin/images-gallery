import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({title}) => {
  const navbarStyle = {
    backgroundColor: 'lightblue'
};
  return (
    <Navbar style={navbarStyle}  variant='light'>
      <Container>
        <Navbar.Brand href='/'>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
