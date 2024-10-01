import React from 'react';

function FunctionClick() {

    function clickHandler() {
       console.log("buttton clicked")
    }

    return (
        <button onClick={clickHandler}>Click me</button>
    )
}

export default FunctionClick;