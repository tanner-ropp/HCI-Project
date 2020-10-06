import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar.js'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import userData from './data/generated.json'

function App() {

    const userProfiles = userData.map((user) => {
        return (
            <Col>
                <Card bg="dark" text="light" style = {{minWidth: '18rem'}} className="mt-4 mb-4 mr-3 ml-3">
                    <Card.Header as="h5" style={{background: 'black'}}>{user.name}</Card.Header>
                    <Card.Body>
                      <Card.Title >Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                      <Button variant="outline-warning">View profile</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <Container fluid className="mt-5 pt-4 pb-4">
          <Row className="ml-2 mr-2">
            {userProfiles}
          </Row>
      </Container>
    </div>
  );
}

export default App;
