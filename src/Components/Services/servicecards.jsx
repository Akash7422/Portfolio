import React from 'react'
import {BiCheck} from "react-icons/bi";
const Servicecards = (props) => {
    return (<div className='space__bt'>
     <BiCheck  className='ss__list__items'/>
       <li>
       
          <p>{props.list}</p>
        </li>
       
    </div>
        
    )
}

export default Servicecards;
