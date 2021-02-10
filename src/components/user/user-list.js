import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableEntries';


export default class userList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get('https://electricbillbackend.herokuapp.com/user')
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.user.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Shop No</th>
            <th>Shop Name</th>
            <th>Meter No</th>
            <th>Date</th>
            <th>Update User</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}