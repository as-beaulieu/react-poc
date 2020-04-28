import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header () {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">POC React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Navigation" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">About</NavDropdown.Item>
                        <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href={"/graphs"}>Graphs and Charts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/goodbye">Intentional Not Found</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/pdf">PDF Export</NavDropdown.Item>
                        <NavDropdown.Item href="/heartbeats">API Heartbeats</NavDropdown.Item>
                        <NavDropdown.Item href="/">API Call</NavDropdown.Item>
                        <NavDropdown.Item href="/inventory">Inventory</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header