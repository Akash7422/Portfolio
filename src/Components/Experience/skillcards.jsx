import React from 'react';

import {BsFillPatchCheckFill} from "react-icons/bs";
const Skillcards = (props) => {
    return (
        
        <article  className='exp__details'>
        <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              {props.skill}
          </h4>
          <small className='text-light'>{props.level} </small></div>
          </article>
    )
}

export default Skillcards;
