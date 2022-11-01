import React from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import BookModal from './BookModal'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  getBooks = async () => {
    console.log(this.state.books);
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      this.setState({
        books: bookData.data,

      }, () => console.log(this.state.books));

    } catch (error) {
      console.log('Error:', error.response);

    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      wonAward: e.target.wonAward.checked,
      awards: e.target.awards.value

    }
    console.log(newBook);

    this.postBooks(newBook);
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    }
    catch (error) {
    }
  }
  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

      await axios.delete(url);

      let updateBooks = this.state.books.filter(book => book._id !== id);

      this.setState({
        books: updateBooks
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }
  openModal = () => {
    this.setState({
      showModal: true,
    })
  }







  componentDidMount() {
    this.getBooks();
    console.log(this.state.books);
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks 
                handleDelete={this.deleteBooks}
                books={this.state.books}
              />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About
                books={this.state.books}
              />}
            >
            </Route>
          </Routes>
          <Main
            openModal={this.openModal}
          />
          <BookModal
            show={this.state.showModal}
            onHide={this.closeModal}
            submit={this.handleBookSubmit}
          />

          <Footer />
        </Router>
      </>
    )
  }
}


export default App;
