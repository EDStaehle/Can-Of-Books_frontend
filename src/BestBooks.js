import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import UpdateBookForm from './UpdateBookForm';



class BestBooks extends React.Component {
constructor(props){
  super(props);
  this.state={
    showUpdateForm: false,
    updateBooks: this.props.updateBook,
    selectedBook: null
  }
}

  render() {
    
    let booksData = this.props.books.map((books) => (


      <Carousel.Item className='caro' key={books._id} id={books._id}>
        <img
      className="d-block w-100 caroImg" 
      src="https://via.placeholder.com/350x150"
      alt="First slide"
    />
        <Carousel.Caption key={books._id}>
          <p>{books.title}</p>
          <p>{books.description}</p>
          <p>{books.awards}</p>
          <Button variant="outline-info" onClick={()=> {this.props.handleDelete(books._id)}}>Delete</Button>
          <Button selectedbook={books} variant="outline-info" onClick={() => this.setState({showUpdateForm: true, selectedBook: books})}>Edit
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
  
    ))
    console.log('App State :', booksData);
    /* TODO: render all the books in a Carousel */
    return (
      <>
      <Carousel>
      {booksData}
      </Carousel>
      {
        this.state.showUpdateForm && 
        <UpdateBookForm
        showUpdateForm={this.state.showUpdateForm}
        updatingBook={this.props.updateBook}
        book={this.state.selectedBook}
        />
      }
      </>
    )
  }
}



export default BestBooks;
