import React from 'react';
import "./about.css";
import About_me from "../../assets/me-about.jpg";
import {BsAwardFill} from "react-icons/bs";
import {VscFolderActive} from 'react-icons/vsc';
import {AiOutlineUser} from "react-icons/ai";
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
                <AiOutlineUser className='about__icon'/>
                <h5> Experience</h5>
                <small> 1.5+ yesr working </small>
                
                </article>
                <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                <h5> Experience</h5>
                <small> 1.5+ yesr working </small>
                
                </article>
                
            </div>
            <p> Help us keep running If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.Thank you! ❤️</p>
            <a href='#contact' className='btn btn-primary'>Lets Talk</a>



            </div>
            </div>

            
        </section>
    )
}

export default about
