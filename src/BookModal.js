import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class BookModal extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        id='modal'
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='modalTitle'>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.submit}>
            <Form.Group controlId="title">
              <Form.Label>Book title</Form.Label>
              <Form.Control type='input' />
              <Form.Text>
                Enter Book Title
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type='input' />
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
            <Button variant="outline-info" onClick={this.props.onHide}>
              close
            </Button>
            <Button variant="outline-info" type='submit'>
              Submit
            </Button>

          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}
