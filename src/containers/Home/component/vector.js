import React from "react";
import './vecror.css'



const Vector =()=>{
    return(
        <div className="arrow arrow--top">
            <svg xmlns="http://www.w3.org/2000/svg" width="200.11" height="609.9" overflow="visible"
                 fill='none' stroke='#241953' strokeWidth='2' strokeMiterlimit='10'
            >
                <g className="item-to bounce-1">
                    <path className="geo-arrow draw-in"
                          d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"/>
                </g>
                {/*<circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="7.96"/>*/}
                {/*<circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96"/>*/}
                {/*<circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="7.96"/>*/}
                <g className="geo-arrow item-to bounce-2">
                    <path className="st0 draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 444.5v-552"/>
                </g>
            </svg>
        </div>    )
}
export default Vector