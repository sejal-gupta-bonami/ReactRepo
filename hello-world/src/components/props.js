import React from 'react';

const Printing = (props) => {
 
    return (
        <div>
        <h1>Hello {props.name} age is {props.age} </h1>
        {props.children}
        </div>

    )
}
export default Printing


//destructuring

// import React from 'react';

// const Printing = (props) => {
//     const { name, age } = props;
//     return (
//         <div>
//         <h1>Hello {name} age is {age} </h1>
//         {props.children}
//         </div>

//     )
// }
// export default Printing