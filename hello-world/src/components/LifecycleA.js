import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello world"
        }
        console.log("inside A constructor function")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("inside A getDerivedStateFromPorps ")
        return null
    }

    componentDidMount() {
        console.log("inside A ComponentDidMount")
    }

    shouldComponentUpdate() {
        console.log("inside A shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("inside A getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("inside A componentDidUpdate")
    }

    changeState = () => {
        this.setState(
            {
                message: "welcome..."
            }
        )
    }

        render() {
            console.log("inside A render method")
            return (
                <div>
                    <div>Lifecycle A </div>
                    <LifecycleB />
                    <button onClick={this.changeState}>click </button>
                </div>

            )
        }
    }


export default LifecycleA
