import React from "react";
import Navbar from "./component/navbar/navbar";
import Slide from "./component/slide/slide";
import Information from "./component/information/information";
import Courses from "./component/courses/courses";
import Statistic from "./component/statistic/statistic";
import {ImFacebook2,BsInstagram,FaLinkedin} from 'react-icons/all'
import homeStyle from './home.module.css'
import Footer from "../../components/footer/footer";
import EBooks from "./component/eBooks/eBooks";


class Home extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Slide/>
                <div className={homeStyle.text}><label>ԳՐԵԹԵ 5 ՏԱՐԻ <br/>ՔՈՈՒՉԻՆԳՈՒՄ</label></div>
                <Information/>
                <Courses/>
                <EBooks/>
                <Statistic/>
<Footer/>

            </div>
        )
    }
}

export default Home