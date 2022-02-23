import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const Header = ({title}) => {
  const navbarStyle = {
    backgroundColor: '#eeeeee'
};
  return (
    <Navbar style={navbarStyle}  variant='light'>
      <Container>
        <Logo alt={title} style={{maxWidth: '12rem', maxHeight: '2rem'}}/>
      </Container>
    </Navbar>
  );
};

export default Header;
