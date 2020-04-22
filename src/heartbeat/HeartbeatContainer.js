import React from 'react'
import HeartbeatApi from "./HeartbeatApi";

class HeartbeatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isServiceRunning: false,
            time: "",
            message: "loading"
        }
    }

    componentDidMount = async () => {
        await HeartbeatApi.get("http://locahost:8080/heartbeat").then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                time: response.data.time,
                message: response.data.message,
                isLoading: false
            })
        }).catch( error => {
            console.log(error)
        })
    }

    render() {
        const { isLoading, time, message } = this.state
        return (
            <div>
                <h2>HEARTBEAT</h2>
                <h3>{isLoading.toString()}</h3>
                <h4>{message}</h4>
                <h5>{time}</h5>
            </div>
        )
    }
}

export default HeartbeatContainer