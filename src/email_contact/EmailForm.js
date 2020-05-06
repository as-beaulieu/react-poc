import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import Alert from "react-bootstrap/Alert";

class EmailForm extends React.Component {
    getInitialState() {
        return {
            feedback: '',
            name: '',
            email: ''
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            email: '',
            showAlert: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const templateIdEnv = process.env.EMAIL_TEMPLATE_ID

        this.sendFeedback(templateIdEnv,
            {
                message_html: this.state.feedback,
                from_name: this.state.name,
                reply_to: this.state.email
            })
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'mailjet',
            templateId,
            variables
        ).then(res => {
            this.setState({...this.state, showAlert: true})
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    showSuccess(message) {

    }

    render() {
        return (
            <Form>
                {this.props.showAlert && <Alert variant={"primary"}>
                    Email successful!
                </Alert>}
                <FormGroup controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={e => {this.setState({email: e.target.value})}}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FormGroup>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={e => {this.setState({name: e.target.value})}}
                    />
                </Form.Group>

                <Form.Group controlId="feedback">
                    <Form.Label>Please leave me a message with your name and email. I will respond quickly.</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        value={this.state.feedback}
                        onChange={e => {this.setState({feedback: e.target.value})}}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>

            </Form>
        );
    }
}

export default EmailForm