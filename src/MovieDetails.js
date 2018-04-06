import React, { Component } from "react";
import {
  Grid,
  Panel,
  Heading,
  Col,
  Thumbnail,
  Button,
  Clearfix,
  Row
} from "react-bootstrap";

class MovieDetails extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2434d246ec60c162a86db597467ef4ed`
    )
      .then(resp => resp.json())
      .then(payload =>
        this.setState({
          movie: payload
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdPush={6}>
            <div>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">
                    {this.state.movie.title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <Thumbnail
                    src={`https://image.tmdb.org/t/p/w500/${
                      this.state.movie.poster_path
                    }`}
                    alt="242x200"
                  />
                </Panel.Body>
              </Panel>
            </div>
          </Col>
          <Col md={6} mdPush={6}>
            <div>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">
                    {this.state.movie.title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>{this.state.movie.overview}</Panel.Body>
              </Panel>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MovieDetails;
