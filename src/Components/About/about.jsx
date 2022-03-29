import React from 'react';
import "./about.css";
import About_me from "../../assets/me-about.jpg";
import {BsAwardFill} from "react-icons/bs";
import {VscFolderActive} from 'react-icons/vsc';
import {AiOutlineUser} from "react-icons/ai";
import {FaBlackTie} from "react-icons/fa";

const about = () => {
    return (
        <section id="about">
           
            <h5>
                Get to know
            </h5>
            <h2> About Me</h2>
            <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
            <img src={About_me} alt='Profile Pic' />
            </div>
            </div>
            <div className='about__content'>
            <div className='about__cards'>
            
                <article className='about__card'>
                <BsAwardFill className='about__icon'/>
                <h5> Experience</h5>
                <small> 1.5+ yesr working </small>
                </article>

                <article className='about__card'>
                <FaBlackTie className='about__icon'/>
                <h5> Role</h5>
                <small> Test Engineer </small>
                
                </article>
                <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                <h5> Intrested</h5>
                <small>Fullstack development</small>
                
                </article>
                
            </div>
            <p className='para'>Innovative software Engineer keen to tackle long-standing problems with novel insights into legacy systems and strategies. Applies personal knowledge and growing competencies to disrupting inefficient operations and stale product categories. Dedicated to offering growing insights to companies seeking to become industry leaders.</p>
            <a href='#contact' className='btn btn-primary'>Lets Talk</a>



            </div>
            </div>

            
        </section>
    )
}

export default about
