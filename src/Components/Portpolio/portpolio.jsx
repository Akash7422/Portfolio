import React from 'react'
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portpolio.css";

const portpolio = () => {
    return (
        <section id='portfolio'>
            <h5>
            My Recent Work
            </h5>
            <h2>
                Portapolio
            </h2>
            <div className='container ppt__cntnr'>
                <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG1} alt="img1" />
                   
                </div>
                <h3>
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'>
                    <a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                </article>
                <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG2} alt="img1" />
                  
                </div>
                <h3> 
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'>
                    <a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                    
                 </article>
                 <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG3} alt="img1" />
                   
                </div><h3>
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'><a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                </article>
                <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG4} alt="img1" />
                   
                </div><h3>
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'><a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                </article>
                <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG5} alt="img1" />  
                </div>
                <h3>
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'><a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                </article>
                <article className='ptp__items'>
                <div className='ptp__item-image'>
                   <img src={IMG6} alt="img1" />
                   
                </div>
                <h3>
                        This is a portapolio item title
                    </h3>
                    <div className='ptp__item-cta'><a href='www.github.com' className='btn ' target="__blank"> GitHub</a>
                    <a href='www.github.com' className='btn btn-primaray' target="__blank"> Live Demo</a>
                    </div>
                    

                </article>
            </div>

        </section>
    )
}

export default portpolio;
