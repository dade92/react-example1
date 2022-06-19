import React from 'react'

const Book = (props) => {
    const {img, title, author, rating, description} = props.book;
    const click = (title, author) => {
        console.log(author + ":" + title)
    }
    return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>
                {author.toUpperCase()}
            </h4>
            <h4>Rating: {rating}</h4>
            <h4>Description: {description}</h4>
            <button type='button' onClick={()=>click(title, author)}>
                Buy now
            </button>
        </article>
    )
}

export default Book;