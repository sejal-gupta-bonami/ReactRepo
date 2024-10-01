import React from 'react'

function StatusMessage(props) {
       let message;
        switch (props.status) {
            case 'true':
                message = <div>Welcome user </div>
                break;
            case 'false':
                message = <div>Welcome stranger</div>
                break;
            default:
                message = <div>invalid</div>
        }

    return (
        <div>
            {message}
        </div>
            
    );
}

export default StatusMessage;