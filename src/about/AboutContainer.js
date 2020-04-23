import React from 'react'
import {Container, Jumbotron} from "react-bootstrap";

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
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2>Contact us</h2>
                        <p>A library to play with form fields, and email contact. </p>
                        <b>In Progress</b>
                        <ol>
                            <li>Will save information provided in form</li>
                            <li>Will send email containing information provided in form</li>
                        </ol>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2>Graphs and charts</h2>
                        <p>A library to play with graphs, charts, and visual representation of data</p>
                        <b>In Progress</b>
                        <ol>
                            <li>Graph will display more titles and legend of displayed data</li>
                            <li>A dynamic graph that will take data from a form body</li>
                        </ol>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2>PDF Export</h2>
                        <p>A library to play with saving data in the form of a pdf</p>
                        <b>In Progress</b>
                        <ol>
                            <li>Provide better styles to show data in an invoice like form</li>
                        </ol>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2>API Heartbeats</h2>
                        <p>A library to play with axios api calls to microservices</p>
                        <b>In Progress</b>
                        <ol>
                            <li>Connect with a statically assigned api to display heartbeat info when called</li>
                            <li>take in a list provided by environment and use list to call microservices heartbeats dynamically</li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutContainer