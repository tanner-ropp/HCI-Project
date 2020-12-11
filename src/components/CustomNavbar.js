import React from 'react';
import {Navbar, Nav, FormControl, Form, Button, NavDropdown} from 'react-bootstrap';
import reel from '../assets/film-reel.png';
import services from '../data/streamingServices.json'

class CustomNavbar extends React.Component {



  filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		console.log(val);
		this.props.filterUpdate(val);
	}

  render() {

    const serviceOptions = services.map((service, i) => {
      const r = '#action/3.' + i;
      return (
        <NavDropdown.Item href={r} onClick={() => this.props.setCurrentGroup(service.name)}>{service.name} users</NavDropdown.Item>
      )
    })

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

            {serviceOptions}
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/4.0" onClick={() => this.props.setCurrentGroup('')}>All users</NavDropdown.Item>
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
