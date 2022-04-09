import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const TopBar = () => {
  return (
    <div style={{background:'pink'}}>
      
      <Navbar  expand="lg" bg="light" variant="light">
        <Container fluid>
         
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
