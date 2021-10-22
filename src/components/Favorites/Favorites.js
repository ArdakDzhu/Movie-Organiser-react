import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'Новый список',
    }

    render() { 
        console.log(this.props)
        return (
            <div className="favorites">
                <input placeholder="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favoriteMovie.map((item, index) => {
                        return <li className="btnDelFromFav" key={index}>
                                    <p>{item.title} ({item.year})</p>
                                    <button onClick={() => this.props.delFromFavList(item.imdbID)}>x</button>
                                </li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;