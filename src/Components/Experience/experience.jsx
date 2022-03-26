import React from 'react';
import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";

const experience = () => {
    return (
        <section id='exp'>
          <h5> What skils I have </h5> 
          <h2> My experience</h2>
          <div className='container exp__container'>
          <div className='exp__frontend'>
          <h3>
              Frontend Development
          </h3>
          <div className='exp_content'>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>
          

          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              CSS
          </h4>
          <small className='text-light'>Expierienced </small>
           </div>
          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>

          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>

          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>
          </article>

          </div>

          </div>
          <div className='exp__backend'>
          <h3>
              Backend Development
          </h3>
          <div className='exp_content'>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>

          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>
          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>

          </article>
          <article  className='exp__details'>
          <BsFillPatchCheckFill className='exp__details__icons'/>
          <div> <h4>
              HTML
          </h4>
          <small className='text-light'>Expierienced </small></div>

          </article>
          </div>

          </div>

          </div>
        </section>
    )
}

export default experience
