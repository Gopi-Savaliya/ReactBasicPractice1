import React from "react";

// function Greet() {
//     return <h1>Hello Gopi</h1>
// }

// const Greet = (props) =>  {
//     return (
//         <div>
//             <h1>
//                 {props.name} {props.surname}
//             </h1>
//             {props.children}
//         </div>
//     )
// }

const Greet = ({name, surname, children}) =>  {
    return (
        <div>
            <h1>
                {name} {surname}
            </h1>
            {children}
        </div>
    )
}

export default Greet;
