import React from 'react';
import { useLocation } from 'react-router';
import qs from "query-string";

const About=()=>{
    const {search} = useLocation();
    const detail = qs.parse(search).detail === 'true';    

    return (
        <div>
            {detail && 'detail : 어쩌구저쩌구'}
            {!detail && 'detail : NONE'}
        </div>
    );
};

export default About;