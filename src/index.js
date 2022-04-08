import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
  <section> 
    <Book/>
   </section>
  );
}

const Book = () => {
  return (
  <article> 
    <Image/> 
    <Title/>  
    <Author/>
  </article>
  )
}
const Image = () => <img src='https://images-na.ssl-images-amazon.com/
images/I/71PmVNpXSUL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL381_SR381,381_.jpg' alt=''/>

const Title = () => <h1>My Evil Mother: A Short Story</h1>

const Author = () => <h4>Margaret Atwood</h4>


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