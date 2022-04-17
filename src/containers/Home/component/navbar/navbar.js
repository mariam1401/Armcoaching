import React from "react";
import armCoachLogo from '../../../../assets/images/logo_0003_gr_blue.png'
import navbarStyle from './navbar.module.css'
import {NavLink} from "react-router-dom";


class Navbar extends React.Component{
    render() {
        return(
            <div className={navbarStyle.navbar}>
               <NavLink exact to='/' className={navbarStyle.logo}> <img src={armCoachLogo} className={navbarStyle.image} alt=''/></NavLink>
                    <nav className={navbarStyle.effect}>
                        <ul className={navbarStyle.menu}>
                                <li><NavLink exact to='/'>Գլխավոր</NavLink></li>
                                <li><NavLink exac to='/courses'>Դասընթացներ</NavLink></li>
                                {/*<li><NavLink exact to='/books'>Books and Articles </NavLink></li>*/}
                                <li><NavLink exact to='/about'>Մեր Մասին</NavLink></li>
                                <li><NavLink exact to='/contact'>Կապ մեզ հետ</NavLink></li>
                        </ul>
                    </nav>
            </div>
        )
    }
}
export  default Navbar