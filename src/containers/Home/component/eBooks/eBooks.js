import style from './eBokks.module.scss'
import  coaching1 from '../../../../assets/images/ebook_3 (1).jpg'
import  coaching2 from '../../../../assets/images/ebook_1 (1).jpg'
import book from '../../../../assets/images/Ինչ-է-քոուչինգը.pdf'
import book2 from '../../../../assets/images/Քոուչինգը-բիզնեսում.pdf'
import { Document, Page } from 'react-pdf';


const EBooks = ()=>(
    <div className={style.ebook_containers}>
    <div className={style.header}>Էլեկտրոնային Գրքեր</div>
       <div className={style.ebook_container}>
         <a href={book} download  target="_blank" >
                <img src={coaching1}/>
          </a>
         <a href={book2} download  target="_blank">
              <img src={coaching2}/>
           </a>

                  </div>


     </div>
)
export default EBooks