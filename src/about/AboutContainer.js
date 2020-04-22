import React from 'react'
import Container from "react-bootstrap/Container";

class AboutContainer extends React.Component{
    render() {
        return (
            <Container className={"about-container"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h2>ABOUT</h2>
                    </div>
                </div>
            </Container>
        )
    }
}

export default AboutContainer