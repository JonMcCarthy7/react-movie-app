import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import MovieCards from "./MovieCards";
const MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=hiphop&include_adult=false&sort_by=created_at.asc&page=1";
class App extends Component {

  state = {
    movies: []
  };
  componentDidMount(){
    fetch(MOVIE_URL)
    .then(response => response.json())
    .then(payload => this.setState({
      movies: payload.results.filter(movie => (movie.poster_path !== null))
      })
    )
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Hip Hop</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1 style={{textAlign: "center"}}>The Best ever made!</h1>
            < MovieCards movies={this.state.movies} />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
