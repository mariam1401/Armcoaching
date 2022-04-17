import React from "react";
import statisticStyle from './statistic.module.css'


class Statistic extends React.Component{
    render() {
        return(
            <div className={statisticStyle.statistic}>
              <div>
                <label>10+</label>
                <label className={statisticStyle.text}>ՆԱԽԱԳԾԵՐ</label>
              </div>
            <div>
               <label>5+</label>
               <label className={statisticStyle.text}>ՈԼՈՐՏՆԵՐ</label>
            </div>
            <div>
               <label>100+</label>
               <label className={statisticStyle.text}>ՈՒՍԱՆՈՂՆԵՐ</label>
            </div>
            <div>
               <label>20+</label>
               <label className={statisticStyle.text}>ՀԱՃԱԽՈՐԴՆԵՐ</label>
            </div>
        </div>

    )
    }
}
export default Statistic