import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



class BestBooks extends React.Component {


  render() {
    
    let booksData = this.props.books.map((books) => (


      <Carousel.Item className='caro' key={books._id}>
        <img
      className="d-block w-100 caroImg" 
      src="https://via.placeholder.com/350x150"
      alt="First slide"
    />
        <Carousel.Caption key={books._id}>
          <p>{books.title}</p>
          <p>{books.description}</p>
          <p>{books.awards}</p>
        </Carousel.Caption>
      </Carousel.Item>
  
    ))
    console.log('App State :', booksData);
    /* TODO: render all the books in a Carousel */
    return (
      <Carousel>
      {booksData}
      </Carousel>
    )
  }
}


export default BestBooks;
