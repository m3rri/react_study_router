import React from 'react';
import { useParams, useLocation } from 'react-router';
import qs from "query-string";
//query-string에서 ? 를 제외하고 json객체로 변환할 수 있음. npn i query-string

//https://kyung-a.tistory.com/36에서 4번 URL params 읽는법 참조
const About=()=>{
    const {name} = useParams();
    const {search} = useLocation();
    const detail = qs.parse(search).detail === 'true';

    return (
        <div>
            <h2>
                About {name}
            </h2>
            {detail && 'detail : 어쩌구저쩌구'}
            {!detail && 'detail : NONE'}
        </div>
    );
};

export default About;