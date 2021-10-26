import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        const inputData = formData.get("search");

        this.getFIndMovie(inputData)
    }

    getFIndMovie = (userSearch) => {
        const apiKey = 'e55ebd0a';
        fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=${apiKey}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.props.fromSearchBox(data.Search)
        })
    }


    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            name="search"
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;