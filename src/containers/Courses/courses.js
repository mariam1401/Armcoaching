import styles from './courses.module.css'
import CoursesContainer from "./component/coursesContainer";
import image1 from '../../assets/images/Untitled.png'
import image2 from '../../assets/images/275940212_2848241988815877_943132386978292914_n.png'
import Footer from "../../components/footer/footer";



const Courses =()=>(
    <div className={styles.courses_container}>
    <div className={styles.header}>ԴԱՍԸՆԹԱՑՆԵՐ </div>
        <div className={styles.main}>
            <CoursesContainer
                link='/courses/upcoming'
             header='ԱՌԱՋԻԿԱ ԴԱՍԸՆԹԱՑ'
             information='Մայիս - Հունիս'

                image1={image2}            />
            <CoursesContainer
                link='/courses/past'
                header='ԸՆԹԱՑԻԿ ԴԱՍԸՆԹԱՑ'
                information='Փետրվար ֊Մայիս'
                image1={image1}

            />

        </div>
    <Footer/>

    </div>

)

export  default Courses