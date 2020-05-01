import React from 'react'
import {Col, Container, Figure, Row} from "react-bootstrap";
import "./assets/home.css";
import exampleimage from "./assets/pawel-czerwinski-G-P98YEVZns-unsplash.jpg";
import tallImage from "./assets/carson-greenhalgh-cYQ8-EWVEX8-unsplash.jpg";

class HomeContainer extends React.Component {

    render() {
        return (
            <Container fluid className={"home-page"}>
                <h2>Home</h2>
                <Row className={"text-area"}>
                    <Col xs={3}>
                        <Figure.Image
                            width={240}
                            height={240}
                            alt={"480x480"}
                            src={tallImage}
                            className={"img-fluid"}
                        />
                    </Col>
                    <Col xs={9}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Col>
                </Row>
                <Row className={"text-area"}>
                    <Col xs={3}>
                        <Figure.Image
                            width={360}
                            height={360}
                            alt={"360x360"}
                            src={exampleimage}
                            className={"img-fluid"}
                        />
                    </Col>
                    <Col xs={9}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Morbi non arcu risus quis varius.
                            Hac habitasse platea dictumst quisque sagittis purus sit amet. Et egestas quis ipsum suspendisse.
                            Ut tortor pretium viverra suspendisse potenti. Morbi blandit cursus risus at ultrices mi tempus.
                            Duis tristique sollicitudin nibh sit amet commodo nulla. Tellus in hac habitasse platea dictumst.
                            Eu consequat ac felis donec et. Quis hendrerit dolor magna eget est lorem.
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomeContainer