import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeShopno = this.onChangeShopno.bind(this);
    this.onChangeShopName = this.onChangeShopName.bind(this);
    this.onChangeMeterno = this.onChangeMeterno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      phone: '',
      shopno: '',
      shopname: '',
      meterno: ''
    }
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeShopno(e) {
    this.setState({ shopno: e.target.value })
  }

  onChangeShopName(e) {
    this.setState({ shopname: e.target.value })
  }

  onChangeMeterno(e) {
    this.setState({ meterno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObj = {
      name: this.state.name,
      phone: this.state.phone,
      shopno: this.state.shopno,
      shopname: this.state.shopname,
      meterno: this.state.meterno
    };

    axios.post('https://electricbillbackend.herokuapp.com/user', userObj)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      phone: '',
      shopno: '',
      shopname: '',
      meterno: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName}  required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeUserPhone} required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Shop No</Form.Label>
          <Form.Control type="text" value={this.state.shopno} onChange={this.onChangeShopno} required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control type="text" value={this.state.shopname} onChange={this.onChangeShopName} required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Meter No</Form.Label>
          <Form.Control type="text" value={this.state.meterno} onChange={this.onChangeMeterno} required/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" >
          Create User
        </Button>
      </Form>
    </div>);
  }
}
