import styles from './footer.module.css'
import logo from '../../assets/images/logo_0003_gr_blue.png'
import {MdLocalPhone,MdEmail,MdOutlineLocationOn,AiFillFacebook,FaInstagramSquare,AiFillLinkedin} from 'react-icons/all'



const Footer =()=>(
    <div className={styles.footer_container}>
        <div>
            <img src={logo} alt='' className={styles.logo}/>
        </div>

        <div className={styles.contact}>
            <label className={styles.header}>Contact Us</label>
            <div className={styles.line}> </div>
            <div className={styles.div}>
                <div><MdLocalPhone className={styles.icon1}/></div>
                <span>+374 98 933 420</span>
            </div>
            <div className={styles.div}>
                <div><MdEmail className={styles.icon1}/> </div>
                <span>coach@armcoaching.am</span>
            </div>
            <div className={styles.div}>
                <div><MdOutlineLocationOn className={styles.icon1}/></div>
                <span>Հր․Քոչար 4, Երևան</span>
            </div>
        </div>

        <div className={styles.follow}>
            <span className={styles.header}>Follow Us</span>
           <div className={styles.line}> </div>
               <a href='https://www.facebook.com/armcoachingcenter'>  <AiFillFacebook size={30}   className={styles.icon}/></a>
               <a href='https://www.instagram.com/armcoaching/'><AiFillLinkedin size={30} className={styles.icon1}/></a>
               <a href='https://www.linkedin.com/company/75453432/admin/'> <FaInstagramSquare size={30} className={styles.icon1}/></a>
        </div>

    </div>


)
export default Footer