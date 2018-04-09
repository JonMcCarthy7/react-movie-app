import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import MovieList from './MovieList'

  class MovieCards extends Component {
    render() {
      return (
        <Grid>
          <MovieList movies={this.props.movies} onClickDetails={this.props.onClickDetails} />
        </Grid>
      );
    }
  }

export default MovieCards;
