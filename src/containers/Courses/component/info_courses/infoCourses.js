import style from './infooCourses.module.css'
import cover from '../../../../assets/images/271920799_2805515863088490_5365865101496721002_n.png'
import React from "react";

const InfoCourses =()=>{
    return(
        <div className={style.main_container}>
            <div className={style.dedline}>Փետրվարի 15/2022 ֊ Մայիսի 22/2022</div>
            <div className={style.name}>ՈՒԶՈՒՄ ԵՍ ԴԱՌՆԱԼ ՔՈՈՒՉ #7</div>
            <div className={style.image}>
                <img src={cover}/>
            </div>
            <div className={style.information1}>
               <span className={style.title}>Դասընթացի մասին</span>
                Armcoaching-ը իրականացնում է իր թվով 7-րդ, արդեն շատերի կողմից երաշխավորված, «Ուզու՞մ ես դառնալ քոուչ»
                եռամսյա դասընթացը, որի ընթացքում ուսուցանվելու է ՝
                <ul>
                    <li>Քոուչինգի հիմունքները․</li>
                    <li>Միջազգային ստանդարտներին համապատասխան քոուչինգային ժամանակակից մոդելներ և տեխնիկաներ․</li>
                    <li>Անհատին ինքնաճանաչման և ինքնակերտման մղելու գործիքակազմեր․</li>
                    <li>Արդյունավետ քոուչինգային հարցադրումներ․</li>
                    <li>Պրոֆեսիոնալ քոուչինգային սեսիայի իրականացում՝ տարբեր ոլորտներում․</li>

                </ul>
            </div>

            <div className={style.information1}>

            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Դասընթացի տևողությունը-</span>
                3 ամիս է՝ շաբաթական 2 օր, երեքշաբթի, հինգշաբթի 19:30-21:30,
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>
                    Դասընթացի արժեքը֊
                    <span className={style.text}>60.000 ՀՀ դրամ</span>
                    </span>
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Գրանցման հղումը-</span>
                <a href=' https://bit.ly/CoachingTraining-7'>  https://bit.ly/CoachingTraining-7</a>
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Դասընթացի մանրամասները-</span>
                <a href='  https://bit.ly/CoachingBrochure7'>    https://bit.ly/CoachingBrochure7</a>
            </div>
            <div className={style.information1}>
                Հիշեցնենք, որ դասընթացի վերջին 1 ամիսը տրամադրվելու է միայն պրակտիկային՝ մենթորի մասնակցությամբ։
            </div>

        </div>
    )

}

export default InfoCourses