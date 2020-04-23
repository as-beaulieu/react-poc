import React from 'react'
import {Container} from "react-bootstrap";
import EmailForm from "./EmailForm";

class ContactContainer extends React.Component {

    render() {
        return (
            <Container className="ContactContainer">

                <h2>ContactContainer</h2>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <button type="button" className="btn btn-primary">Primary</button>
                        <button type="button" className="btn btn-secondary">Secondary</button>
                    </div>
                </div>
                <EmailForm />
            </Container>
        )
    }
}

export default ContactContainer