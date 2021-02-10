import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';

export default class BillsTable extends Component {

    constructor(props) {
        super(props);
        this.deleteBill = this.deleteBill.bind(this);
    }

    deleteBill() {
        axios.delete('https://electricbillbackend.herokuapp.com/bill/' + this.props.obj._id)
            .then((res) => {
                console.log('Bill successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.meterno}</td>
                <td>{this.props.obj.currentreading}</td>
                <td>{this.props.obj.previousreading}</td>
                <td>{this.props.obj.units}</td>
                <td>{this.props.obj.duedate}</td>
                <td>{this.props.obj.amount}</td>
               {/* <td>
                    <Link className="edit-link" to={"/update/" + this.props.obj._id}>
                        Edit
                    </Link> </td> */}
                    {/* <Button onClick={this.deleteBill} size="sm" variant="danger">Delete</Button> */}
                
            </tr>
        );
    }
}