import React, {useState} from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar.js';
import ProfileViewer from './components/ProfileViewer.js';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import userData from './data/generated.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

    const [filterText, setFilterText] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    //console.log(filterText);

    const userProfiles = userData.filter(user=> {
				return user.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			  }).map((user,i) => {
        var a = ["Netflix","Amazon Prime","Hulu","HBO Go","Showtime","Youtube","Vudu","HBO Max", "iTunes"];
        var res = a.sort(function() {
          return 0.5 - Math.random();
        });

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        var platformArray = res.slice(0,getRandomInt(1,5));

        var platforms = "";
        platformArray.forEach((item, i) => {
            platforms = platforms + item;
            if (i != platformArray.length - 1) {
                platforms = platforms + ", "
            }
        });

        return (
            <Col>
                <Card bg="dark" text="light" style = {{minWidth: '18rem'}} className="mt-4 mb-4 mr-3 ml-3">
                    <Card.Header as="h4" style={{background: 'black'}}>{user.name}</Card.Header>
                    <Card.Body>
                      <Card.Title >Movies reviewed: {getRandomInt(1,53)}</Card.Title>
                      <Card.Text>
                          <b>Streaming services: </b>
                        {platforms}
                      </Card.Text>
                      <Button variant="outline-warning" onClick={() => setCurrentUser(user)}>View profile</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
  return (
    <div className="App">
      <CustomNavbar filterUpdate={setFilterText} exitProfile={setCurrentUser}></CustomNavbar>
      {currentUser === null &&
      <Container fluid className="mt-5 pt-4 pb-4">
          <Row className="ml-2 mr-2">
            {userProfiles}
          </Row>
      </Container>}
      { currentUser !== null && 
      <Container fluid className="mt-5 pt-2 pb-4">
          <ProfileViewer userData={currentUser}></ProfileViewer>
      </Container>}
    </div>
  );
}

export default App;
