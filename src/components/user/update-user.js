import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeShopno = this.onChangeShopno.bind(this);
    this.onChangeShopName = this.onChangeShopName.bind(this);
    this.onChangeMeterno = this.onChangeMeterno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      phone: '',
      shopno: '',
      shopname: '',
      meterno: ''
    }
  }

  componentDidMount() {
    axios.get('https://electricbillbackend.herokuapp.com/user/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          phone: res.data.phone,
          shopno: res.data.shopno,
          shopname: res.data.shopname,
          meterno: res.data.meterno
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('https://electricbillbackend.herokuapp.com/user/update/' + this.props.match.params.id, userObj)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/viewuser')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" value={this.state.phone} onChange={this.onChangeUserPhone} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Shop No</Form.Label>
          <Form.Control type="text" value={this.state.shopno} onChange={this.onChangeShopno} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control type="text" value={this.state.shopname} onChange={this.onChangeShopName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Meter No</Form.Label>
          <Form.Control type="text" value={this.state.meterno} onChange={this.onChangeMeterno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update User
        </Button>
      </Form>
    </div>);
  }
}
