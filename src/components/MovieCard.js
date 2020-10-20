import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import Ratings from 'react-ratings-declarative';



class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: 4 };

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }

    render() {
        const props = this.props;
        console.log(props);
        console.log("Hi");
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
                        <div>Rating: {props.rating}/5</div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default MovieCard;