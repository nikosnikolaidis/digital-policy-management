import React, { useState, useRef } from 'react';


function Workflows(props)  {

    return (
        <iframe src={`${process.env.REACT_APP_JBPM_URL}`} style={{width:"100%", height:"90vh"}}/>
    );
};
  
export default Workflows;