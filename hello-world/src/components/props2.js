import React, { Component } from 'react';

class Properties extends Component{
    
    render() {
        console.log(this)
        return (
            <div>
                <h1>hello {this.props.name} , {this.props.age} </h1>
                {this.props.children}
            </div>


       )
   }
}

export default Properties;