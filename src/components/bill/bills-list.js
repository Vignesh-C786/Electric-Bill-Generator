import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BillsTable from './BillsTable';


export default class billsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bill: []
    };
  }

  componentDidMount() {
    axios.get('https://electricbillbackend.herokuapp.com/bill')
      .then(res => {
        this.setState({
          bill: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.bill.map((res, i) => {
      return <BillsTable obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Meter No</th>
            <th>Current Reading</th>
            <th>Previous Reading</th>
            <th>Total Units</th>
            <th>Due Date</th>
            <th>Total Amount</th>
            {/* <th>Update User</th> */}
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}