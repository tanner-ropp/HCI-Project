import React from 'react';
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';

function CustomNavbar() {
  return (
      <Navbar  variant="dark" fixed="top" style={{background: 'black'}}>
        <Navbar.Brand href="#home">HCI Project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
  );
}

export default CustomNavbar;
