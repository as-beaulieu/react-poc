import React from 'react'
import {Container} from "react-bootstrap";
import LineGraphExample from "./LineGraphExample";

class GraphContainer extends React.Component {

    render() {
        return (
            <Container className={"graph-container"}>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <LineGraphExample />
                    </div>
                </div>
            </Container>
        )
    }
}

export default GraphContainer