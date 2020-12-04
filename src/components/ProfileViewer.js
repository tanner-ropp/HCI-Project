import React from 'react';
import {Card, Row, Col, Button, Form, Modal} from 'react-bootstrap';
import genres from '../data/genres.json';
import streamingServices from '../data/streamingServices.json';
import { Multiselect } from 'multiselect-react-dropdown';
import MovieCard from './MovieCard.js'
import {useState} from 'react'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import sortedGenres from '../data/sortedGenres.json'

function ProfileViewer(props) {

    const [hasChanged, setHasChanged] = useState(false);

    const handleChange = (currentNode, selectedNode) => {
      
    }

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
                    <div style={{maxHeight: '75vh', overflow: 'hidden', overflowY: 'scroll', backgroundColor: '#111111', borderRadius: '8px', paddingLeft: '30px', paddingRight: '30px', height: '100%'}}>
                      <Form className="mt-5" onChange={() => {setHasChanged(true)}}>
                        <Form.Group>
                              <Form.Label>Streaming services</Form.Label>
                              <div key={`inline-checkbox`} className="mb-3">
                                {/*streamingServices.map((service) => {
                                  return <Form.Check inline label={service.name} type="checkbox" id={`inline-checkbox-1`} />
                                })*/}
                                <Multiselect
                                  onSelect={() => {setHasChanged(true)}}
                                  onRemove={() => {setHasChanged(true)}}
                                  options={streamingServices}
                                  displayValue="name"
                                  style={selectStyles}
                                  avoidHighlightFirstOption="true"
                                  closeOnSelect={false}
                                  showCheckbox="true"
                                />
                              </div>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Label>Genres</Form.Label>
                          {/*<Form.Control as="select" multiple htmlSize="10">
                            {genreList}
                          </Form.Control>*/}
                          {/*<Multiselect
                              onSelect={() => {setHasChanged(true)}}
                              onRemove={() => {setHasChanged(true)}}
                              options={genreObjects}
                              displayValue="name"
                              style={selectStyles}
                              avoidHighlightFirstOption="true"
                              closeOnSelect={false}
                              showCheckbox="true"
                          />*/}
                          <DropdownTreeSelect className="bootstrap-demo" data={sortedGenres} onChange={handleChange} showPartiallySelected={true}/>
                        </Form.Group>
                        <Button variant="primary" disabled={!hasChanged} onClick={() => {setHasChanged(false)}}>
                          Apply
                        </Button>
                        {!hasChanged && <div style={{color: "lightgreen"}}>Current preferences saved!</div>}
                      </Form>
                    </div>
                </Col>
            </Row>
          </Card.Body>
          <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" centered>
                    <Modal.Header>
                         <Modal.Title>{props.title} ({props.year})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Set descriptive tags for this movie -
                        {/*<Multiselect
                            options={tags}
                            displayValue="name"
                            style={selectStyles}
                            avoidHighlightFirstOption="true"
                            closeOnSelect={false}
                            showCheckbox="true"
                            ref={this.multiselectRef}
                        />*/}
                        <DropdownTreeSelect id="tags" className="bootstrap-demo" onChange={this.handleChange} data={sortedTags} mode="hierarchical"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
      </Card>
  );
}

export default ProfileViewer;
