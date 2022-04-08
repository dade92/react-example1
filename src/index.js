import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';
//setup vars
const title = 'I love you to the moon and back'
const author = 'Margaret Atwood'
const img = 'https://images-na.ssl-images-amazon.com/images/I/71PmVNpXSUL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL381_SR381,381_.jpg'

function BookList() {
  return (
  <section className='booklist'> 
    <Book/>
   </section>
  );
}

const Book = () => {
  return (
  <article className='book'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>
      {author.toUpperCase()}
    </h4>
  </article>
  )
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