import React, { Component } from 'react'

class Search extends Component {
    render() {

        const { value, onChange, search, clearSearch } = this.props;

        return (
            <div className="search">
                <input value={ value } onChange={ e => onChange(e.target.value) } id="search-input" type="text" placeholder="enter book title or author"/>
                <button onClick={ () => search() } id="search-button">Search</button>
                <button onClick={ () => clearSearch() } id="search-clear">Clear Search</button>
            </div>
        )
    }
}

export default Search