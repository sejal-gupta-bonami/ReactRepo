import React, { Component } from 'react';

class ClassClicked extends Component{

    clickHandler() {
        console.log("button clicked again")    
    }

    render() {
        return (
            <button onClick={()=>this.clickHandler()}>click here</button>
        )
    }
}

export default ClassClicked;