import React from 'react';
import {Navbar, Nav, FormControl, Form, Button, NavDropdown} from 'react-bootstrap';
import reel from '../assets/film-reel.png';

class CustomNavbar extends React.Component {



  filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		console.log(val);
		this.props.filterUpdate(val);
	}

  render() {
    return (
      <Navbar variant="dark" fixed="top" style={{background: 'black'}}>
        <Navbar.Brand href="#home" onClick={() => {this.props.exitProfile(null); this.props.setCurrentGroup('')}} style={{fontFamily: 'Racing Sans One, cursive', fontSize: '30px'}} >
          <img
            alt=""
            src={reel}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          MovieMasters
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick={() => {this.props.exitProfile(null); this.props.setCurrentGroup('')}}>Home</Nav.Link>
          <NavDropdown title="User groups" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" onClick={() => this.props.setCurrentGroup('Netflix')}>Netflix users</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={() => this.props.setCurrentGroup('Hulu')}>Hulu users</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" onClick={() => this.props.setCurrentGroup('HBO Go')}>HBO Go users</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" onClick={() => this.props.setCurrentGroup('Disney+')}>Disney+ users</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.5" onClick={() => this.props.setCurrentGroup('')}>All users</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={(value) => this.myValue = value} onChange={this.filterUpdate.bind(this)}/>
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  };
}

export default CustomNavbar;
