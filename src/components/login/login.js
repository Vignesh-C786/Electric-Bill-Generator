import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import { useHistory } from "react-router-dom";
// import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    // onSubmit(e) {
    //     e.preventDefault()

    //     const billObj = {
    //         email: this.state.email,
    //         password: this.state.password
    //     };

    //     axios.post('http://localhost:4000/bill', billObj)
    //         .then(res => console.log(res.data));

    //     this.setState({
    //         email: '',
    //         password: ''
    //     });
    // }
    onSubmit(e) {
        // const history = useHistory();
        console.log("SuccessFully Logged In");
    }

    render() {

        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email Id" required />
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter password" required />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">Login</Button>
            </Form>
        </div>);
    }
}
