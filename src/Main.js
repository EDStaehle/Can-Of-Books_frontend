import React from 'react'
import Button from 'react-bootstrap/Button';

export default class Main extends React.Component {
  openModal = () => {
    this.props.openModal()
  }
  render() {
    return (
      <Button variant="outline-info" onClick={this.openModal}>
          Add A Book!!
      </Button>
    )
  }
}
