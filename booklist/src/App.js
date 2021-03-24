import React, { Component } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'
import './index.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      booklist: data,
      shelf: [],
      search: ''
    }
  }

  addToShelf = book => {
    this.setState({ 
      booklist: this.state.booklist.filter(books => books.id !== book.id),
      shelf: [...this.state.shelf, { ...book }]
    })
  }

  removeFromShelf = book => {
    const upToId = this.state.booklist.filter(books => books.id < book.id)
    const fromId = this.state.booklist.filter(books => books.id > book.id)
    
    this.setState({
      booklist: [...upToId, book, ...fromId],
      shelf: this.state.shelf.filter(books => books.id !== book.id)
    })
  }

  clearShelf = () => {
    this.setState({
      booklist: data,
      shelf: []
    })
  }

  onChange = value => {
    this.setState({ search: value })
  }

  search = () => {
    let searchMatches = []

    this.state.booklist.filter(books => {
      const formatSearch = this.state.search.toLowerCase();
      const titleFormat = books.title.toLowerCase()
      const authorFormat = books.author.toLowerCase()

      if (titleFormat.includes(formatSearch) || authorFormat.includes(formatSearch)) {
        return searchMatches.push(books)
      }
    })
    
    searchMatches.length > 0 ? this.setState({ booklist: searchMatches} ) : this.setState({ booklist: this.state.books })
  }

  clearSearch = () => {
    const shelfBookIds = this.state.shelf.map(book => book.id)
    this.setState({ 
      booklist: data.filter(book => !shelfBookIds.includes(book.id)),
      search: '' })
  }

  render() {
    return (
      <div className="App">
        <section className="header-search-container">
          <Header />
          <Search value={ this.state.search }onChange={ this.onChange } search={ this.search } clearSearch={ this.clearSearch }/>
        </section>
        <section className="booklist-shelf-container">
          <Booklist booklist={ this.state.booklist } addToShelf={ this.addToShelf }/>
          <div className="separator"></div>
          <Shelf shelf={ this.state.shelf } removeFromShelf={ this.removeFromShelf } clearShelf={ this.clearShelf }/>
        </section>
      </div>
    )
  }
}

export default App