import React from 'react';
import { useLocation } from 'react-router-dom';

const FrameDetails = () => {
    const location = useLocation();
    const name = location.state.name;
   
    return (
        <div>
           <p> AGEGEGEG </p>
        </div>
    )
}

export default FrameDetails
