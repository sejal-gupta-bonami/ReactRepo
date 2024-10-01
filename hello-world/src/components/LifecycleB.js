import React, { Component } from 'react'

class LifecycleB extends Component{
    constructor(props) {
        super(props)
        this.state = {
            message : "hello world"
        }
        console.log("inside B constructor function")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("inside B getDerivedStateFromProps ")
        return null
    }

    componentDidMount() {
        console.log("inside B ComponentDidMount")
    }


    shouldComponentUpdate() {
        console.log("inside B shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("inside B getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("inside B componentDidUpdate")
    }


    render() {
        console.log("inside B render method")     
        return <div>Lifecycle B </div>
    }
}

export default LifecycleB 