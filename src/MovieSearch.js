import React, { Component } from "react";
import {Button} from "react-bootstrap";

class MovieSearch extends Component {
    render() {
      return (
        <div>
          <input placeholder="Movie Search" type="text" ref={input => (this.input = input)} />
          <br />
          <Button onClick={() => this.props.movieSearchTerm(this.input.value)}>Find Movie</Button>
        </div>
      );
    }
  }
  

export default MovieSearch;
