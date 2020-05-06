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
                        <h3 className="card-title">Contact Me</h3>
                        <p className="card-text">
                            This contact form will send me an email with the details you provide.
                        </p>
                        <b className={"card-text"}>
                            Please feel free to give critique about my website,
                            or feature ideas you would like for me to research
                        </b>
                    </div>
                </div>
                <EmailForm />
            </Container>
        )
    }
}

export default ContactContainer