import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class UpdateBookForm extends Component {
  constructor(props){
    super(props)
    this.state={
      showUpdateForm: this.props.showUpdateForm
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      wonAward: e.target.wonAward.checked || this.props.book.wonAward,
      awards: e.target.awards.value || this.props.book.awards,
      _id: this.props.book._id
    }
    console.log(e.target);
    console.log(this.props.book);
    console.log('updated', bookToUpdate)
    this.props.updatingBook(bookToUpdate);
  }
  
  render() {
    return (
      <>
<Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Book title</Form.Label>
              <Form.Control type='input' placeholder={this.props.book.title}/>
              <Form.Text>
                Enter Book Title
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label></Form.Label>
              <Form.Control type='input' placeholder={this.props.book.description}/>
              <Form.Text>
                Enter Book description
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wonAward">
              <Form.Check type="checkbox" label="Book has won awards" />
            </Form.Group>

            <Form.Group controlId='awards'>
              <Form.Label>Book Awards</Form.Label>
              <Form.Control type='input' />
              <Form.Text>
                Enter Book Title
              </Form.Text>
            </Form.Group>
            <Button variant="outline-info" onClick={() => this.setState({showUpdateForm: null})}>
              close
            </Button>
            <Button variant="outline-info" type='submit'>
              Update
            </Button>

          </Form>
      </>
    )
  }
}
