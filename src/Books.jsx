export const Book = (props) => {
    const {img, title, author, rating} = props.book;
    return (
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>
        {author.toUpperCase()}
      </h4>
      <h4>Rating: {rating}</h4>
    </article>
    )
  }