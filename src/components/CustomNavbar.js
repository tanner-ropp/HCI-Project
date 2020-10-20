import React from 'react';
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';

class CustomNavbar extends React.Component {

  filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = this.myValue.value;
		console.log(val);
		this.props.filterUpdate(val);
	}

  render() {
    return (
      <Navbar  variant="dark" fixed="top" style={{background: 'black'}}>
        <Navbar.Brand href="#home">HCI Project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick={() => this.props.exitProfile(null)}>Home</Nav.Link>
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
