import React from 'react'
import {Button} from "react-bootstrap";
import './about.css'

class AboutItem extends React.Component {
    inProgressList = this.props.ToDoItems.map((item) =>
        <li key={item}>{item}</li>
    )

    render() {
        return(
            <div className={"card"}>
                <div className={"card-body"}>
                    <h2>{this.props.Title}</h2>
                    <Button
                        variant="primary"
                        className={"link-button"}
                        href={this.props.Route}>
                            Go to this project
                    </Button>
                    <p>{this.props.Description} </p>
                    {this.props.ToDoItems &&
                        <div>
                            <b>In Progress</b>
                            <ol>
                                {this.inProgressList}
                            </ol>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default AboutItem