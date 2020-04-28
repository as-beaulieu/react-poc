import React from "react"
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";

class InventoryContainer extends React.Component {

    render() {
        return (
            <Container>
                <h2>Inventory</h2>
                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Doodad</td>
                                <td>Does things</td>
                                <td>21</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Thingie</td>
                                <td>Does stuff</td>
                                <td>11</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }

}

export default InventoryContainer