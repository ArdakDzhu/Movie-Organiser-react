import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
            
        ]
    }

    componentDidMount() {
        // const id = this.props.match.params;
        console.log(this.props.keyFromServer)
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${this.props.keyFromServer}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.movies.forEach((item) => {
                fetch(`http://www.omdbapi.com/?i=${item}&apikey=e55ebd0a`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    const copyData = [...this.state.movies]
                    copyData.push(data)
                    this.setState({
                        movies: copyData
                    })
                })
            })
            
            this.setState({
                movies: data.movies
            })
        })
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    
    render() { 
        console.log(this.state.movies)
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.Title} {item.Year}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;