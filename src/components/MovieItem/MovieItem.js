import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    
    addFilmsToList = () => {
        const { imdbID, Title, Year, Poster } = this.props;
        this.props.addFilmsToList({ imdbID, Title, Year, Poster });
    }

    render() {
        const { Title, Year, Poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button 
                        onClick={this.addFilmsToList}
                        type="button" className="movie-item__add-button"
                        >
                        Добавить в список
                        </button>
                </div>
            </article>
        ); 
    } 
}
 
export default MovieItem;