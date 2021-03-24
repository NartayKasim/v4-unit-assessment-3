import React, { Component } from 'react'

class Booklist extends Component {
    render() {
        const { booklist, addToShelf } = this.props;

        const displayBooks = booklist.map( book => {
            return (
                <div className="book" key={ book.id }>
                    <img src={ book.img } alt="" onClick={ () => addToShelf(book) }/>
                    <span className="title">{ book.title }</span>
                    <span className="author">{ book.author }</span>
                </div>
                )
        })

        return (
            <div className="booklist">
                { displayBooks }
            </div>
        )
    }
}

export default Booklist