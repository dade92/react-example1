import React from 'react'
import ReactDom from 'react-dom'
import Book  from './Book'
import { books } from './Books'

//CSS
import './index.css';

const BookList = () => <section className='booklist'> 
      {books.map((book) => {
            return (
              <Book key={book.id} book={book}/>
            )
      })
      }
    </section>

ReactDom.render(<BookList/>, document.getElementById('root'));