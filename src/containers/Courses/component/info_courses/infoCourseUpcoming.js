import React from "react";
import style from './upcoming.module.css'
import cover from "../../../../assets/images/275940212_2848241988815877_943132386978292914_n.png";


const InfoCourseUpcoming =()=>{
    return(
        <div className={style.main_container}>
            <div className={style.dedline}>Մայիս֊ Հունիս</div>
            <div className={style.name}>ԷՆԵԱԳՐԱՄԱՆ ՔՈՈՒՉԻՆԳՈՒՄ</div>
            <div className={style.image}>
                <img src={cover}/>
            </div>
            <div className={style.information1}>
                <span className={style.title}>Դասընթացի մասին</span>
                Էնեագրաման օգնում է հասկանալ թե ինչպես են տարբեր մարդիկ ընկալում աշխարհը և ինչու են հենց  այդպես
                ընկալում: Այս գործիքը կարևոր բանալի է քոուչի ձեռքում' օգնելու հաճախորդին հասնել առավելագույն արդյունքի:<br/>
                Դասընթացի արդյունքում կբացահայտեք՝
                <ul>
                    <li>էնեագրամայի կառուցվածքը և 9️էնեատիպերի նկարագրությունն ու դինամիկան․</li>
                    <li>Յուրաքանչյուր էնեատիպի տաղանդները և ուժեղ կողմերը, ինչպես նաև կույր կետերն ու թույլ կողմերը․</li>
                    <li>Էնեատիպերի խորքային ներքին կոնֆլիկտները և սահմանափակող համոզմունքները․</li>
                    <li>Քոուչինգի արդյունավետ գործիքներ և տեխնիկաներ․</li>
                    <li>Կմշակեք էնեատիպերի հետ քոուչինգային աշխատանքի կարճաժամկետ և երկարաժամկետ ռազմավարություն․</li>

                </ul>
            </div>

            <div className={style.information1}>

            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Դասընթացի տևողությունը-</span>
                2 ամիս (40 ժամ),շաբաթական 3 հանդիպում,օրական 2 ժամ (երեկոյան)
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>
                    Դասընթացի արժեքը֊
                    <span className={style.text}>Ամսական 60.000 ՀՀ դրամ</span>
                    </span>
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Գրանցման հղումը-</span>
               <a href=' https://bit.ly/eneagramaincoaching'>  https://bit.ly/eneagramaincoaching</a>
            </div>
            <div className={style.information}>
                <div className={style.cricle}></div>
                <span  className={style.title}>Դասընթացի մանրամասները-</span>
                <a href='  https://bit.ly/EneagramaBrochure'>   https://bit.ly/EneagramaBrochure</a>
            </div>
            <div className={style.information1}>

            </div>

        </div>
    )
}
export default InfoCourseUpcoming