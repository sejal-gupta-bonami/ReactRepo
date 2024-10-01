import React, { Component } from 'react'
import Child from './Child';


class Parent extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : "parent"
        }

    }

    getName(test) {
        alert(`hello ${this.state.name} and ${test}`);
        
    }
    render() {
        return (
            <div>
                <Child nameHandler={(name)=>this.getName(name)} />
            </div>
        )
    }
}

export default Parent;