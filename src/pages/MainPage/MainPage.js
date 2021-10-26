import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {

    state = {
        favoriteMovie: [],
        movies: []
    } 

    

    delFromFavList = (imdbID) => {
        const favMov = this.state.favoriteMovie.findIndex((elem) => {
            return elem.imdbID === imdbID;
        })
        const copyState = [...this.state.favoriteMovie]
        copyState.splice(favMov, 1);
        this.setState({
            favoriteMovie: copyState
        })
    }

    addFilmsToList = (objectOfFilm) => {
        const currentFavoriteMovie = this.state.favoriteMovie;
        const copyFavoriteMovie = [...currentFavoriteMovie];

        const check = copyFavoriteMovie.findIndex((elem) => {
            return JSON.stringify(elem) === JSON.stringify(objectOfFilm)
        })

        if (check === -1) {
            copyFavoriteMovie.push(objectOfFilm);
        }

        this.setState({
            favoriteMovie: copyFavoriteMovie
        })
    }

    fromSearchBox = (data) => {
        this.setState({
            movies: data
        })
    }

    render() { 
        return ( 
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox fromSearchBox={this.fromSearchBox} />
                        </div>
                        <div className="main-page__movies">
                            <Movies movies={this.state.movies} addFilmsToList={this.addFilmsToList} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites getKey={this.props.getKey} favoriteMovie={this.state.favoriteMovie} delFromFavList={this.delFromFavList} />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;