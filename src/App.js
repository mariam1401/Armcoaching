import React from "react";
import './App.css'
import Home from "./containers/Home/home";
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import {Switch} from "react-router-dom";
import Navbar from "./containers/Home/component/navbar/navbar";
import Courses from "./containers/Courses/courses";
import InfoCourses from "./containers/Courses/component/info_courses/infoCourses";
import Footer from "./components/footer/footer";
import ContactUs from "./containers/Contact us/contact us";
import AboutUs from "./containers/About us/aboutUs";
import InfoCourseUpcoming from "./containers/Courses/component/info_courses/infoCourseUpcoming";

 function App() {
return(
    <Router>
        <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>


                <Route path="/about" exact>
                    <Navbar/>
                    <AboutUs/>
                    <Footer/>


                </Route>
                <Route path="/courses" exact>
                    <Navbar/>
                    <Courses/>

                </Route>

                <Route path="/courses/past" exact>
                    <Navbar/>
                    <InfoCourses/>
                    <Footer/>

                </Route>
                <Route path="/contact" exact>
                    <Navbar/>
                    <ContactUs/>

                </Route>
            <Route path="/courses/upcoming" exact>
                <Navbar/>
                <InfoCourseUpcoming/>
                <Footer/>
                {/*<ContactUs/>*/}

            </Route>
                <Route path="/careers/:slug" exact>
                    <Navbar/>

                </Route>
            </Switch>
    </Router>

)
    }

    export default App