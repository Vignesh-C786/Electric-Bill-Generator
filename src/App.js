import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/user/create-user";
import UpdateUser from "./components/user/update-user";
import UserList from "./components/user/user-list";
import CreateBill from "./components/bill/create-bill";
import UpdateBill from "./components/bill/update-bill";
import BillsList from "./components/bill/bills-list";
// import Login from "./components/login/login";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            {/* <Navbar.Brand>
              <Link to={"/user"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand> */}

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/user"} className="nav-link">
                  Create User
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/user/:id"} className="nav-link">
                  Edit User
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/viewuser"} className="nav-link">
                  User's List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/bill"} className="nav-link">
                  Generate Bill
                </Link>
              </Nav>

              <Nav>
                <Link to={"/viewbill"} className="nav-link" >
                  Bill's List
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/"} className="nav-link" >
                  Log Out
                </Link>
              </Nav> */}
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateBill} />
                <Route path="/user" component={CreateUser} />
                <Route path="/update/:id" component={UpdateUser} />
                <Route path="/viewuser" component={UserList} />
                <Route path="/bill" component={CreateBill} />
                <Route path="/update/:id" component={UpdateBill} />
                <Route path="/viewbill" component={BillsList}/>
                
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;