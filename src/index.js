import React from 'react'
import ReactDom from 'react-dom'
import SpecificBook  from './Book'
import { books } from './Books'

//CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'> 
      {books.map((book) => {
            return (
              <SpecificBook key={book.id} book={book}></SpecificBook>
            )
      })
      }
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));