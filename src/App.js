import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
consts MOVIE_URL = 
class App extends Component {

  state = {
    movies: []
  };
  componentDidMount(){
    fetch(MOVIE_URL)
    .then(response => response.json())
    .then(payload => this.setState({
      movies: payload.results
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
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
