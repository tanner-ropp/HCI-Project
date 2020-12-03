import React, { Component } from 'react';
import {Row,Col, Modal, Button} from 'react-bootstrap';
import Ratings from 'react-ratings-declarative';
import { Multiselect } from 'multiselect-react-dropdown';
import tags from '../data/tags.json';


class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            rating: this.props.rating,
            show: false,
            tags: []
        };

        this.multiselectRef = React.createRef();

        this.changeRating = this.changeRating.bind(this);
    }


    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    handleSave = () => {
        this.setState({
            tags: this.multiselectRef.current.getSelectedItems()
        }, this.handleClose())
    }

    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }

    render() {
        const props = this.props;
        const selectStyles = {
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

        const tagNames = this.state.tags.map((tag, index) => { 
            if (index === 0) {
                return <span>{tag.name}</span>
            }
            return <span>, {tag.name} </span>
        })
        //console.log(this.state.tags)

        return (
            <Row className="m-3">
                <Col xs="auto">
                    <img src={require('../assets/' + props.imgSrc)}></img>
                </Col>
                <Col className="mt-3">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <h3>{props.title}</h3>
                        <h5>{props.year}</h5>
                        <Ratings
                            rating={this.state.rating}
                            widgetRatedColors="gold"
                            changeRating={this.changeRating}
                            widgetDimensions="30px"
                            widgetSpacings="5px"
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings>
                        <div>Rating: {this.state.rating}/5</div>
                        {this.state.tags.length===0 ? <div>Tags: --</div> : <div>Tags: {tagNames}</div>}
                        <Button className="mt-3" onClick={this.handleShow}>Edit tags</Button>
                    </div>
                </Col>
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" centered>
                    <Modal.Header>
                         <Modal.Title>{props.title} ({props.year})</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Set descriptive tags for this movie -
                        <Multiselect
                            options={tags}
                            displayValue="name"
                            style={selectStyles}
                            avoidHighlightFirstOption="true"
                            closeOnSelect={false}
                            showCheckbox="true"
                            ref={this.multiselectRef}
                            />
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
            </Row>
        );
    }
}

export default MovieCard;