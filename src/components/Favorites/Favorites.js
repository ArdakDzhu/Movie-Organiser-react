import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: '',
        showBtn: true,
        idFromServer: ''
    }

    changeInptValue = (event) => {
        this.setState({title: event.target.value})
    }

    saveFavList = () => {
    this.addToList() 
       this.setState({showBtn: false})
    }

    addToList = () => {
        
        const data = {
            title: this.state.title,
            movies: [
               
            ]
        }
        
        this.props.favoriteMovie.forEach((elem) =>{
            data.movies.push(elem.imdbID)
        })

        fetch(`https://acb-api.algoritmika.org/api/movies/list`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
          })
          .then((res) => {
              return res.json()
          })
          .then((data) => {
              this.setState({
                 idFromServer: data.id
              })
          })
    }

    render() {
        return (
            <div className="favorites">
                <input onChange={this.changeInptValue} value={this.state.title} placeholder="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favoriteMovie.map((item, index) => {
                        return <li className="btnDelFromFav" key={index}>
                                    <p>{item.Title} ({item.Year})</p>
                                    <button onClick={() => this.props.delFromFavList(item.imdbID)}>X</button>
                                </li>;
                    })}
                </ul>
                {this.state.showBtn && <button
                    onClick={this.saveFavList}
                    type="button"
                    className={`favorites__save ${!this.state.title ? 'disable' : ''}`}
                    
                >
                    Сохранить список
                </button>}
                {!this.state.showBtn && <Link onClick={() => this.props.getKey(this.state.idFromServer)} to={`/list/${this.state.title}`}>Перейти к списку</Link>}
            </div>
        );
    }
}
 
export default Favorites;