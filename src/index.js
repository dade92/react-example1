import React from 'react'
import ReactDom from 'react-dom'
import { Book } from './Books'

//CSS
import './index.css';
const books = [
  {
    id:1,
    img : 'https://images-na.ssl-images-amazon.com/images/I/71PmVNpXSUL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL381_SR381,381_.jpg',
    title: 'My evil mother',
    author: 'Margaret Atwood',
    rating: 4
  },
  {
    id:2,
    img : 'https://m.media-amazon.com/images/I/41ya6frLgGL.jpg',
    title: 'Strangers We Know',
    author: 'Elle Marr',
    rating: 3
  }
]


function BookList() {
  return (
    <section className='booklist'> 
      {books.map((book) => {
            return (
              <Book key={book.id} book={book}></Book>
            )
      })
      }
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));

// REACT COMPONENTS RULES
// stateless functional component
// ALWAYS return JSX
// return single element
// className instead of class
// use parenthesis after the return

function Greeting() {
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => <h2>Davide Botti</h2>
const Message = () => {
  return (
    <p>this is a message</p>
  )
}

const Greeting3 = () => {
  return (
    <div className=''>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href='#'>hello world</a>
        </li>
        <input type='text' name='' id=''></input>
      </ul>
      <div></div>
    </div>
  )
}

function Greeting5() {
  return <h4>this is Davide and this is my first component</h4>;
}

const Greeting2 = () => {
  return React.createElement('h1', {}, 'hello world')
}

const Greeting4 = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'))
}