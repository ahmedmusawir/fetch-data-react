import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Movies extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=ea71a8f&s=Iron&man')
      .then(response => response.json())
      .then(responseData => {
        // console.log(responseData.Search);
        this.setState({ movies: responseData.Search });
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
            <h4>
              <strong>Type:</strong> {movie.Type}
            </h4>
            <h4 className="d-none d-sm-block">
              <strong>IMDB ID:</strong> {movie.imdbID}
            </h4>
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
        <input
          className="form-control"
          type="text"
          placeholder="Invite Someone"
          value={this.state.newName}
          onKeyDown={this.handleChange.bind(this)}
        />
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
          className="guest-list list-item-group mt-3"
        >
          {movies}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Movies;
