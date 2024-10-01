import React, { Component } from 'react'

class ConRendering extends Component{
    constructor() {
        super()
        this.state = {
            IsLogged: true
        }
    }
    render() {
        // //FIRST APPROACH 
        // if (this.state.IsLogged) {
        //     return(<div>Welcome User</div>)
        // }
        // else {
        //     return(<div>Welcome stranger</div>)
        // }

        // //SECOND APPROACH
        // let message;
        // if (this.state.IsLogged) {
        //     message = <div>Wecome User</div>
        // }
        // else {
        //     message = <div>Welcome stranger</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )

        //THIRD APPROACH
        return (
            (this.state.IsLogged) ? <div>Welcome user </div> : <div>Welcome stranger</div>
        )


        //FOURTH APPROACH
        //short circuit operator
        // return((this.state.IsLogged) && <div>Welcome user</div>)

        //SWITCH CASES
        // let message;
        // switch (this.state.IsLogged) {
        //     case 'true':
        //         message = <div>Welcome user </div>
        //         break;
        //     case 'false':
        //         message = <div>Welcome stranger</div>
        //         break;
        //     default:
        //         message = <div>invalid</div>
        // }

        // return (
        //     <div>
        //          {message}
        //     </div>
            
        // )
    }
}

export default ConRendering;