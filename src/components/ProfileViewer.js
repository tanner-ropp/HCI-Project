import React from 'react';
import {Card, Row, Col, Button, Form, Modal} from 'react-bootstrap';
import genres from '../data/genres.json';
import { Multiselect } from 'multiselect-react-dropdown';
import MovieCard from './MovieCard.js'
import {useState} from 'react'

function ProfileViewer(props) {

    const [hasChanged, setHasChanged] = useState(false);

    const genreList = genres.map((item) => {
        return <option>{item}</option>
    });

    var genreObjects = genres.map((item,i) => {
        return {name: item, id: i};
    })

    var selectStyles = {
          option: { // To change css for dropdown options
            color: 'black'
        },
        multiselectContainer: { // To change css for multiselect (Width,height,etc..)
	           //height : '1000px'
        },
        optionContainer: { // To change css for option container
	           maxHeight: '300px'
           }
        }

  return (
      <Card bg="dark" text="light" style = {{minWidth: '18rem', height : '90vh'}} className="mt-4 mb-4 mr-3 ml-3">
          <Card.Header as="h3" style={{background: 'black'}}>{props.userData.name}</Card.Header>
          <Card.Body>
            <Row>
                <Col>
                    <h4>Movie reviews</h4>
                    <div style={{maxHeight: '75vh', overflow: 'hidden', overflowY: 'scroll', backgroundColor: '#111111', borderRadius: '8px'}}>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={5} year={2000}></MovieCard>
                      <MovieCard title='Enemy' genre='def' imgSrc='enemy.jpg' rating={4} year={2013}></MovieCard>
                      <MovieCard title='The Emoji Movie' genre='def' imgSrc='emoji.jpg' rating={2} year={2017}></MovieCard>
                      <MovieCard title='Moonlight' genre='def' imgSrc='moonlight.jpg' rating={5} year={2016}></MovieCard>
                      <MovieCard title='Another Earth' genre='def' imgSrc='earth.jpg' rating={3} year={2011}></MovieCard>
                      <MovieCard title='The Dark Knight' genre='def' imgSrc='batman.jpg' rating={5} year={2008}></MovieCard>
                    </div>
                </Col>
                <Col>
                    <h4>Preferences</h4>
                    <Form className="mt-5" onChange={() => {setHasChanged(true)}}>
                      <Form.Group>
                            <Form.Label>Streaming services:</Form.Label>
                            <div key={`inline-checkbox`} className="mb-3">
                              <Row>
                                <Col className="text-left">
                                  <Form.Check label="Netflix" type="checkbox" id={`inline-checkbox-1`} />
                                  <Form.Check label="Amazon Prime" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Hulu" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="HBO Go" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Shudder" type="checkbox" id={`inline-checkbox-2`} />
                                </Col>
                                <Col className="text-left">
                                  <Form.Check label="HBO Max" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="HBO Now" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Showtime" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Vudu" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="ESPN" type="checkbox" id={`inline-checkbox-2`} />
                                </Col>
                                <Col className="text-left">
                                    <Form.Check label="Youtube" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="iTunes" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Apple TV" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="Disney+" type="checkbox" id={`inline-checkbox-2`} />
                                  <Form.Check label="DC Universe" type="checkbox" id={`inline-checkbox-2`} />
                                </Col>
                                <Col className="text-left">
                                    <Form.Check label="Quibi" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check label="Starz" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check label="Epix Now" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check label="Britbox" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check label="BET+" type="checkbox" id={`inline-checkbox-2`} />
                                </Col>
                              </Row>
                            </div>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Genres</Form.Label>
                        {/*<Form.Control as="select" multiple htmlSize="10">
                          {genreList}
                        </Form.Control>*/}
                        <Multiselect
                            onSelect={() => {setHasChanged(true)}}
                            onRemove={() => {setHasChanged(true)}}
                            options={genreObjects}
                            displayValue="name"
                            style={selectStyles}
                            avoidHighlightFirstOption="true"
                            closeOnSelect={false}
                            showCheckbox="true"
                            />
                      </Form.Group>
                      <Button variant="primary" disabled={!hasChanged} onClick={() => {setHasChanged(false)}}>
                        Apply
                      </Button>
                      {!hasChanged && <div style={{color: "lightgreen"}}>Current preferences saved!</div>}
                    </Form>
                </Col>
            </Row>
          </Card.Body>
      </Card>
  );
}

export default ProfileViewer;
