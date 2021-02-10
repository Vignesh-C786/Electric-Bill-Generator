import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBill extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeMeterno = this.onChangeMeterno.bind(this);
        this.onChangeCurrentReading = this.onChangeCurrentReading.bind(this);
        this.onChangePreviousReading = this.onChangePreviousReading.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            meterno: '',
            currentreading: '',
            previousreading: ''
        }
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

        const billObj = {
            meterno: this.state.meterno,
            currentreading: this.state.currentreading,
            previousreading: this.state.previousreading
        };

        axios.post('https://electricbillbackend.herokuapp.com/bill', billObj)
            .then(res => console.log(res.data));

        this.setState({
            meterno: '',
            currentreading: '',
            previousreading: ''
        });
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
                    Generate Bill
        </Button>
            </Form>
        </div>);
    }
}
