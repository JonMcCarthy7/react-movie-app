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
import { Link, Route } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Movie Town App</a>
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
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetails} />
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button, FormGroup, FormControl } from 'react-bootstrap';
// import MovieCards from "./MovieCards";

// class App extends Component {

//   state = {
//     movies: [],
//     genre: "",
//   };
//   componentDidMount(){
//     this.getMovie();
//   }
//   handleGenreChange = event => {
//     this.setState({
//       genre: event.target.value
//     });
//   };

//   getMovie = () => {
//     let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query= + "${(this.state.genre).trim()}" + &include_adult=false&sort_by=created_at.asc&page=1`;
//     fetch(movieUrl)
//     .then(response => response.json())
//     .then(payload => this.setState({
//       movies: payload.results.filter(movie => (movie.poster_path))
//       })
//     )
//     .catch(err => console.log(err));
//   }

//   handleOnSubmit = event => {
//     event.preventDefault();
//     this.setState({genre: this.state.genre}, () => {this.getMovie()});
//     console.log(this.state.genre);
//   };
//   render() {
//     return (
//       <div style={{backgroundColor: "gray"}}>
//         <Navbar inverse fixedTop>
//           <Grid>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="/">{this.state.genre}</a>
//               </Navbar.Brand>
//               <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Form onSubmit={(e) => this.handleOnSubmit(e)} pullRight>
//              <FormGroup>
//                <FormControl
//                  type="text" placeholder="Search"
//                  value={this.state.genre} onChange={this.handleGenreChange}
//                />
//              </FormGroup>
//              <Button type="submit">Submit</Button>
//            </Navbar.Form>
//           </Grid>
//         </Navbar>
//         <Jumbotron>
//           <h1 style={{textAlign: "center"}}>The Best ever made!</h1>
//         </Jumbotron>
//           <Grid>
//             < MovieCards movies={this.state.movies} />
//           </Grid>
//       </div>
//     );
//   }
// }

// export default App;
