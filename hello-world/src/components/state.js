import React, { Component } from 'react'

class States extends Component {
    constructor() {
        super()
        this.state = {
            message:"This is the initial state ..."
        }
    }

    changeMessage() {
        this.setState({
            message:"changed state..."
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click here</button>
           </div>
        )
    }
}

export default States;
