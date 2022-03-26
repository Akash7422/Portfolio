import React from 'react';
import "./services.css";
import {BiCheck} from "react-icons/bi";
const services = () => {
    return (
        <section id='services'>
        <h5>
            What I offer
        </h5>
        <h2>
            Services
        </h2>
           <div className='container ss__ctnr'>
           <article className='ss'>
           <div className='ss__head'>
           <h3>UI/UX Design</h3>

           </div>
           <ul className='ss__list'>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               
           </ul>
           </article>
           <article className='ss'>
           <div className='ss__head'>
           <h3>Web Development</h3>

           </div>
           <ul className='ss__list'>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               <li>
               <BiCheck  className='ss__list__items'/>
               The search supports synonyms. Try searching for "hamburger", or "logout".

               </li>
               
           </ul>
           </article>
          
           </div> 
        </section>
    )
}

export default services;
