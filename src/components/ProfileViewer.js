import React from 'react';
import {Card, Row, Col, Button, Form, Modal} from 'react-bootstrap';
import genres from '../data/genres.json';
import { Multiselect } from 'multiselect-react-dropdown';
import MovieCard from './MovieCard.js'
import {useState} from 'react'

function ProfileViewer(props) {


    const genreList = genres.map((item) => {
        return <option>{item}</option>
    });

    var genreObjects = genres.map((item,i) => {
        return {name: item, id: i};
    })
    console.log(genreObjects);
    console.log(genres);

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
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                      <MovieCard title='Memento' genre='def' imgSrc='Memento.jpg' rating={4.5} year={1987}></MovieCard>
                    </div>
                </Col>
                <Col>
                    <h4>Preferences</h4>
                    <Form className="mt-5">
                      <Form.Group>
                            <Form.Label>Streaming services:</Form.Label>
                            <div key={`inline-checkbox`} className="mb-3">
                              <Form.Check inline label="Netflix" type="checkbox" id={`inline-checkbox-1`} />
                              <Form.Check inline label="Amazon Prime" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Hulu" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="HBO Go" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="HBO Max" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="HBO Now" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Showtime" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Vudu" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Youtube" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="iTunes" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Apple TV" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Disney+" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Quibi" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Starz" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Epix Now" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Britbox" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Shudder" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="ESPN" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="DC Universe" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="BET+" type="checkbox" id={`inline-checkbox-2`} />
                              <Form.Check inline label="Sundance Now" type="checkbox" id={`inline-checkbox-2`} />
                            </div>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Genres</Form.Label>
                        {/*<Form.Control as="select" multiple htmlSize="10">
                          {genreList}
                        </Form.Control>*/}
                        <Multiselect
                            options={genreObjects}
                            displayValue="name"
                            style={selectStyles}
                            avoidHighlightFirstOption="true"
                            closeOnSelect={false}
                            showCheckbox="true"
                            />
                      </Form.Group>
                      <Button variant="primary">
                        Apply
                      </Button>
                    </Form>
                </Col>
            </Row>
          </Card.Body>
      </Card>
  );
}

export default ProfileViewer;
