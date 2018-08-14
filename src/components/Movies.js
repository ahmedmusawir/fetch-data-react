import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

class Movies extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios
      .get('http://www.omdbapi.com/?apikey=ea71a8f&s=spider&man')
      .then(response => {
        // console.log(response.data.Search);
        this.setState({ movies: response.data.Search });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  handleChange(e) {
    if (e.key === 'Enter') {
      let newName = { name: e.target.value };
      let newNames = this.state.movies.concat(newName);
      this.setState({ movies: newNames });
      e.target.value = '';
    }
  }

  handleRemove(i) {
    let newNames = this.state.movies;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
  }

  render() {
    console.log(this.state.movies);
    let movies = this.state.movies.map((movie, i) => (
      <li className="row" key={i}>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <figure>
            <img className="img-fluid pt-3" src={movie.Poster} alt="" />
          </figure>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="text">
            <h4>{movie.Title}</h4>
            <h4>
              <strong>Year:</strong> {movie.Year}
            </h4>
            <h5>
              <strong>Type:</strong> {movie.Type}
            </h5>
            <h5 className="d-none d-sm-block">
              <strong>IMDB ID:</strong> {movie.imdbID}
            </h5>
          </div>
          <button
            className="float-right"
            onClick={this.handleRemove.bind(this, i)}
          >
            <i className="fa fa-trash text-warning" aria-hidden="true" />
          </button>
        </div>
      </li>
    ));
    return (
      <div className="container">
        <div className="main-header">
          <h1 className="main-title">Movie Search</h1>
          <SearchForm />
        </div>
        <div className="main-content">
          <MovieList />
        </div>
      </div>
    );
  }
}

export default Movies;
