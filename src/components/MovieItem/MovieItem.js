import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    
    addFilmsToList = () => {
        const { imdbID, title, year, poster } = this.props;
        this.props.addFilmsToList({ imdbID, title, year, poster });
    }

    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
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