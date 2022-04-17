import  style from '../courses.module.css'
import {Link, NavLink} from "react-router-dom";

const CoursesContainer = ({header,name,information,image1,link})=>(
    <div className={style.image_container}>
        <div className={style.courses_header}> {header}</div>
        {/*<div className={style.info}>*/}
        <NavLink to={link} className={style.container}>
            <img src={image1} className={style.image}/>
            <div className={style.text_container}>
                    {/*<span className={style.hover}> {information} <br/>{name} </span>*/}
                    <span className={style.name}>{information}</span>

            </div>
        {/*</div>*/}
        </NavLink>

    </div>

)
export  default  CoursesContainer