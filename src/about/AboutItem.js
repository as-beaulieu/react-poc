import React from 'react'
import {Button, ProgressBar} from "react-bootstrap";
import './about.css'

class AboutItem extends React.Component {
    inProgressList = this.props.ToDoItems.map((item) =>
        <li key={item}>{item}</li>
    )



    render() {
        const finished = this.props.FinishedItems ? this.props.FinishedItems.length : 0
        const todo = this.props.ToDoItems ? this.props.ToDoItems.length : 1
        const prog = (finished / todo) * 100

        return(
            <div className={"card"}>
                <div className={"card-body"}>
                    <h2>{this.props.Title}</h2>
                    <ProgressBar now={prog} />
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