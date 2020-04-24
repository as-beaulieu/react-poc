import React from 'react'
import {Col, Container, Jumbotron} from "react-bootstrap";
import AboutItem from "./AboutItem";
import Row from "react-bootstrap/Row";

class AboutContainer extends React.Component{
    render() {
        return (
            <div className={"about-container"}>
                <Jumbotron fluid>
                    <Container className={"card-body"}>
                        <h2>ABOUT</h2>
                        <p>Current projects I'm working on or have finished</p>
                        <b>TODO</b>
                        <ul>
                            <li>Make an "AboutCard" to dynamically display elements</li>
                            <li>Place project items and info into data to be consumed by AboutCard</li>
                            <li>Provide a link button in the AboutCard to link user to selected project</li>
                            <li>Provide an element to link to github repo for public code</li>
                        </ul>
                        <h3>Wish features</h3>
                        <ul>
                            <li>
                                <b>Maps</b>
                                <p>A project featuring leaflet.js to display shapefiles and markers for an interactive map</p>
                            </li>
                            <li>
                                <b>Login Page</b>
                                <p>A simple login page to play with authentication</p>
                            </li>
                            <li>
                                <b>Users</b>
                                <p>Playing with a table of all users to edit and change permissions</p>
                            </li>
                        </ul>
                    </Container>
                </Jumbotron>
                <Container fluid>
                    <Row className={"about-row"}>
                        <Col>
                            <AboutItem
                                Title={"Contact us"}
                                Description={"A library to play with form fields, and email contact."}
                                Route={"/contact"}
                                ToDoItems={[
                                    "Will save information provided in form",
                                    "Will send email containing information provided in form"
                                ]}/>
                        </Col>
                    </Row>
                    <Row className={"about-row"}>
                        <Col>
                            <AboutItem
                                Title={"Graphs and charts"}
                                Description={"A library to play with graphs, charts, and visual representation of data"}
                                Route={"/graphs"}
                                ToDoItems={[
                                    "Graph will display more titles and legend of displayed data",
                                    "A dynamic graph that will take data from a form body"
                                ]}/>
                        </Col>
                    </Row>
                    <Row className={"about-row"}>
                        <Col>
                            <AboutItem
                                Title={"PDF Export"}
                                Description={"A library to play with saving data in the form of a pdf"}
                                Route={"/pdf"}
                                ToDoItems={[
                                    "Provide better styles to show data in an invoice like form"
                                ]}/>
                        </Col>
                    </Row>
                    <Row className={"about-row"}>
                        <Col>
                            <AboutItem
                                Title={"API Heartbeats"}
                                Description={"A library to play with axios api calls to microservices"}
                                Route={"/heartbeats"}
                                ToDoItems={[
                                    "Connect with a statically assigned api to display heartbeat info when called",
                                    "take in a list provided by environment and use list to call microservices heartbeats dynamically"
                                ]}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutContainer