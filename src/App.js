import React, {useState, useEffect} from 'react';
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
    const [currentGroup, setCurrentGroup] = useState('');
    const [userProfiles, setUserProfiles] = useState(() => 
        userData.map((user) => {
          var a = ["Amazon Prime","Hulu","HBO Go","Showtime","Disney+","Vudu","HBO Max", "Netflix"];
          var res = a.sort(function() {
            return 0.5 - Math.random();
          });

          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
          }

          var platformArray = res.slice(0,getRandomInt(1,4));

          var platforms = "";
          platformArray.forEach((item, i) => {
              platforms = platforms + item;
              if (i != platformArray.length - 1) {
                  platforms = platforms + ", "
              }
          });
          
          user.reviews = getRandomInt(1,30)
          user.platforms = platforms;
          return user;
        })
      )
    

    const userProfileCards = userProfiles.filter((user => {
        return user.platforms.toLowerCase().indexOf(currentGroup.toLowerCase()) >= 0
        }))
        .filter(user=> {
				return user.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			  }).map((user,i) => {
          return (
            <Col>
                <Card bg="dark" text="light" style = {{minWidth: '18rem', height: '90%'}} className="mt-4 mb-4 mr-3 ml-3">
                    <Card.Header as="h4" style={{background: 'black'}}>{user.name}</Card.Header>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title >Movies reviewed: {user.reviews}</Card.Title>
                      <Card.Text>
                          <b>Streaming services: </b>
                        {user.platforms}
                      </Card.Text>
                      <Button variant="outline-warning" onClick={() => setCurrentUser(user)} className="mt-auto mx-auto">View profile</Button>
                    </Card.Body>
                </Card>
            </Col>
          )
        });

  return (
    <div className="App">
      <CustomNavbar filterUpdate={setFilterText} exitProfile={setCurrentUser} currentUser={currentUser} setCurrentGroup={setCurrentGroup}></CustomNavbar>
      {currentUser === null &&
      <Container fluid className="mt-5 pt-4 pb-4">
          {currentGroup !== '' && <Row className="justify-content-center mt-2"><h3 style={{color: 'white'}}>{currentGroup} users</h3></Row>}
          <Row className="ml-2 mr-2">
            {userProfileCards}
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
