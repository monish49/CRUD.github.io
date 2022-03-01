import React from 'react'
import './book_p.css'
import Sec_b from './mindset0.jpg'
import first_b from './alchemist.jpg'
import thirdb from './atomic.jpg'

const books = [
{
  id:1,
  img: first_b,
  title: "The Alchemist",
  author: "Paulo Coelho",

},

{
  id:2,
  img:Sec_b,
  title:"Mindset",
  author:"Carol Dweck",
},
{
  id:3,
  img:thirdb,
  title:"Atomic Habits",
  author:"James Clear",
}
];

function BookList() {
  return (
    <section className='wholepage'>
      {books.map((book,index)=>{
        return(
          <Book key={book.id} {...book} > </Book>
        )
      })}
    </section>
  );
}


const Book = ({img,title,author}) => {
  // console.log(props)
  // const {img,title,author}=props.book;
  return (

    <article className='single_book'>
      <img src={img} width="130px" height="190px" alt="" />
      <h4> <a href='#'>{title}</a> </h4>
      <h5>{author}</h5>
    </article>
  );
}

export default BookList