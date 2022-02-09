import React from "react";

const Hello = () => {
    // return(
    //     <div className='class'>
    //         <h1>Hello Gopi</h1>
    //     </div>
    // );
    return React.createElement(
        'div', 
        {id: 'hello', className: 'class'}, 
        React.createElement('h1', null, 'Hello Gopi')
    );
}

export default Hello;
