import React, { useState, useRef } from 'react';



function Workflows(props)  {

    const onClick=(e)=>{
        i++;
        setNumber(number+1);
    }

    const [number, setNumber] = useState(0);
    
    var i=0;

    return (
        <div>
            <h1>{number}</h1>
            <h1>{i}</h1>
            <button onClick={(e)=>onClick(e)}>+</button>
        </div>
    );
};
  
export default Workflows;