import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBill extends Component {

  constructor(props) {
    super(props)

    this.onChangeMeterno = this.onChangeMeterno.bind(this);
    this.onChangeCurrentReading = this.onChangeCurrentReading.bind(this);
    this.onChangePreviousReading = this.onChangePreviousReading.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      meterno: '',
      currentreading: '',
      previousreading: ''
    }
  }

  componentDidMount() {
    axios.get('https://electricbillbackend.herokuapp.com/bill/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          meterno: res.data.meterno,
          currentreading: res.data.currentreading,
          previousreading: res.data.previousreading
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeMeterno(e) {
    this.setState({ meterno: e.target.value })
  }

  onChangeCurrentReading(e) {
    this.setState({ currentreading: e.target.value })
  }

  onChangePreviousReading(e) {
    this.setState({ previousreading: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const userObj = {
      meterno: this.state.meterno,
      currentreading: this.state.currentreading,
      previousreading: this.state.previousreading
    };

    axios.put('https://electricbillbackend.herokuapp.com/bill/update/' + this.props.match.params.id, userObj)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/viewbill')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Meter No</Form.Label>
          <Form.Control type="text" value={this.state.meterno} onChange={this.onChangeMeterno} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Current Reading</Form.Label>
          <Form.Control type="text" value={this.state.currentreading} onChange={this.onChangeCurrentReading} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Previous Reading</Form.Label>
          <Form.Control type="text" value={this.state.previousreading} onChange={this.onChangePreviousReading} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Bill
        </Button>
      </Form>
    </div>);
  }
}
