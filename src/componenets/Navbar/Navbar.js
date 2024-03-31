import React from "react"; 
import Img from '../Imgs/Img.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Container, Nav, FormControl, Button, Form } from 'react-bootstrap';
import { FaSearch, FaBars, FaSave, FaShoppingCart, FaBell } from 'react-icons/fa';
import '../Navbar/Navbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const Navigationbar = () => {
  return (
    <section>
    <Navbar bg="white" expand="lg" height="10000" width={1440}  >
      <Container >
        <Navbar.Brand href="#home">
          <img
            src={Img} // Replace with your logo path
            height="60"
            width={293.3}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Form className="col-3 d-flex float-right">
            <FormControl
             
              type="search"
              placeholder="Search here..."
              className="mr-2"
              aria-label="Search"
            />
            
            <button  class="icon1" color > <FaSearch /></button>
          </Form>



          <Nav>


          <DropdownButton id="dropdown-basic-button" title="Explore">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Hobbies">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
          <Nav.Link href="#cart"><FaSave  class="icon"/></Nav.Link>

            <Nav.Link href="#cart"><FaShoppingCart class="icon"/></Nav.Link>
            <Nav.Link href="#notifications"><FaBell class="icon"/></Nav.Link>
            <button type="button" class="btn btn-outline" >Sign IN</button>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Navigationbar;
