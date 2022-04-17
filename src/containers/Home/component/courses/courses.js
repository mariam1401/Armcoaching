import React from "react";
import coursesStyle from './courses.module.css'
import courses from '../../../../assets/images/271920799_2805515863088490_5365865101496721002_n.png'
import coursesImage from '../../../../assets/images/enagrama_fbinsta.png'
import {Link, NavLink} from "react-router-dom";


class Courses extends React.Component{
    render() {
        return(
            <div className={coursesStyle.courses}>
                <label>ԴԱՍԸՆԹԱՑՆԵՐԸ</label>
                <div className={coursesStyle.images}>
                    <div>
                        <NavLink to='/courses/past'>
                            <img src={courses}/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/courses/upcoming'>
                            <img src={coursesImage}/>
                        </NavLink>
                    </div>
                    <NavLink to='/courses'>See all</NavLink>
                </div>
            </div>
        )
    }
}
export default Courses