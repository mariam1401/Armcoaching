import style from './contact.module.css'
import image from '../../assets/images/kv-contact-us-xs.jpg'
import {MdLocationOn,BsFillTelephoneFill,MdEmail,FaFacebookSquare} from 'react-icons/all'


const ContactUs =()=>{
    return(
        <>
      <div className={style.container}>
          <img src={image} className={style.image}/>
          <span className={style.text}>Կապվեք մեզ հետ</span>
      </div>
        <div className={style.info_container}>
            <div className={style.main_container}>
             <MdLocationOn className={style.icon}/>
               <span className={style.title}>Գրասենյակ`</span>
                <span className={style.answer}>Հր․Քոչար 4, Երևան </span>
            </div>
            <div className={style.main_container}>
                <BsFillTelephoneFill className={style.icon1}/>
                <span className={style.title1}>Հեռախոսահամար`</span>
                <span className={style.answer}>+374 98933420 </span>
            </div>
            <div className={style.main_container}>
                <MdEmail className={style.icon1}/>
                <span className={style.title}>Էլ․ փոստ`</span>
                <span className={style.answer}> coaching@armcoaching.am</span>
            </div>

        </div>
            </>
    )
}
export  default ContactUs