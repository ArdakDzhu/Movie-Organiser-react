import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {


    render() { 
        return ( 
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem
                            addFilmsToList={this.props.addFilmsToList}
                            {...movie}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;