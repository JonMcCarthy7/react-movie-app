import React, { Component } from "react";
import {
  Grid,
  Navbar,
  Jumbotron,
  Nav,
  NavDropdown,
  MenuItem,
  NavItem
} from "react-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import MovieSearch from "./MovieSearch";

class App extends Component {
  state = {
    searchTermURI: ""
  };

  movieSearchTerm = searchTerm => {
    this.setState({
      searchTermURI: encodeURIComponent(searchTerm)
    });
    this.props.history.push("./movies");
  };

  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Movie Town App</a>{" "}
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/movies">Movies</Link>
              </NavItem>
            </Nav>
          </Grid>
        </Navbar>
        <Jumbotron>
          <h1 style={{ textAlign: "center" }}>The Best ever made!</h1>
        </Jumbotron>
        <Route
          exact
          path="/"
          render={props => (
            <MovieSearch {...props} movieSearchTerm={this.movieSearchTerm} />
          )}
        />
        <Route
          exact
          path="/movies"
          render={props => (
            <Movies {...props} searchTermURI={this.state.searchTermURI} />
          )}
        />
        <Route path="/movies/:movieId" component={MovieDetails} />
      </div>
    );
  }
}

export default withRouter(App);
