import React from "react";
import coachingImg from '../../../../assets/images/keepgrowing.png'
import slideStyle from './slide.module.css'
import Vector from "../vector";

class Slide extends  React.Component{
    render() {
        return(
            <div className={slideStyle.image}>
                 {/*<Vector/>*/}
                <img src={coachingImg} className={slideStyle.container}/>
                {/*<span>COACHING</span>*/}
            </div>
        )
    }
}
export default Slide