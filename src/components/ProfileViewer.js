import React, { Component } from 'react';
import {Card, Row, Col, Button, Modal} from 'react-bootstrap';
import genres from '../data/genres.json';
import streamingServices from '../data/streamingServices.json';
import { Multiselect } from 'multiselect-react-dropdown';
import MovieCard from './MovieCard.js'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import sortedGenres from '../data/sortedGenres.json'


class ProfileViewer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            genres: [],
            tempGenres: [],
            services: [],
            tempServices: [],
            showGenre: false,
            showService: false
        };

        this.multiselectRef = React.createRef();

    }


    handleCloseGenre = () => this.setState({showGenre: false, tempGenres: []});
    handleShowGenre = () => this.setState({showGenre: true});

    handleCloseService = () => this.setState({showService: false, tempServices: []});
    handleShowService = () => this.setState({showService: true});

    handleSaveGenre = () => {
        this.setState({
            genres: this.state.tempGenres
        }, this.handleCloseGenre())
    }

    handleSaveService = () => {
        this.setState({
            services: this.multiselectRef.current.getSelectedItems()
        }, this.handleCloseService())
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((this.state.showGenre && nextState.showGenre) || (this.state.showService && nextState.showService )) {
            return false // dont re render while still in modal
        }
        return true
    }

    handleChange = (currentNode, selectedNodes) => {
        this.setState({
            tempGenres : selectedNodes
        })
    }


  render(){

    const props = this.props;

    const genreList = genres.map((item) => {
        return <option>{item}</option>
    });

    const genreNames = this.state.genres.map((genre, index) => { 
            if (index === 0) {
                return <span key={genre.label}>{genre.label}</span>
            }
          return <span key={genre.label}>, {genre.label}</span>
        })

    const serviceNames = this.state.services.map((service, index) => { 
            if (index === 0) {
                return <span>{service.name}</span>
            }
          return <span>, {service.name}</span>
        })

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
          <Card.Header as="h3" style={{background: 'black'}}>{this.props.userData.name}</Card.Header>
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
                    <div style={{maxHeight: '75vh', overflow: 'hidden', overflowY: 'scroll', backgroundColor: '#111111', borderRadius: '8px', padding: '30px', height: '100%', textAlign: "left"}}>
                      <h5>Streaming services</h5>
                        <br></br>
                        {this.state.services.length === 0 ? <div>--</div> : <div>{serviceNames}</div>}
                        <br></br>
                      <Button className="mt-3 mb-5" onClick={this.handleShowService}>Edit services</Button>
                      <br></br>
                      <br></br>
                      <br></br>
                      <h5>Genres</h5>
                      <br></br>
                        {this.state.genres.length === 0 ? <div>--</div> : <div>{genreNames}</div>}
                        <br></br>
                      <Button className="mt-3" onClick={this.handleShowGenre}>Edit genres</Button>
                    </div>
                </Col>
            </Row>
          </Card.Body>
          <Modal show={this.state.showGenre} onHide={this.handleCloseGenre} backdrop="static" centered>
              <Modal.Header>
                    <Modal.Title>Genre preferences</Modal.Title>
              </Modal.Header>
              <Modal.Body>Select preferred movie genres -
                  <DropdownTreeSelect id="genres" className="bootstrap-demo" onChange={this.handleChange} data={sortedGenres} showPartiallySelected={true}/>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleCloseGenre}>
                  Close
                  </Button>
                  <Button variant="primary" onClick={this.handleSaveGenre}>
                  Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>
          <Modal show={this.state.showService} onHide={this.handleCloseService} backdrop="static" centered>
              <Modal.Header>
                    <Modal.Title>Streaming service preferences</Modal.Title>
              </Modal.Header>
              <Modal.Body>Select preferred streaming services -
                  <Multiselect
                            options={streamingServices}
                            displayValue="name"
                            style={selectStyles}
                            avoidHighlightFirstOption="true"
                            closeOnSelect={false}
                            showCheckbox="true"
                            ref={this.multiselectRef}
                        />
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleCloseService}>
                  Close
                  </Button>
                  <Button variant="primary" onClick={this.handleSaveService}>
                  Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>
      </Card>
  )
  }
        
}
export default ProfileViewer;
