import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
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
      books: []
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
      description: e.target.color.value,
      awards: e.target.location.value

    }
    console.log(newBook);
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      let createdBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    }
    catch(error){
    }
  }
deleteBooks = async (id) => {
  try {
  let url = `${process.env.REACT_APP_SERVER}/books/${id}`;

await axios.delete(url);

let updateBooks = this.states.books.filter(book => book._id !== id);

  this.setState({
books: updateBooks
  });
  }
  catch(error){
  console.log(error.message);
  }
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
          <Footer />
        </Router>
      </>
    )
  }
}


export default App;
