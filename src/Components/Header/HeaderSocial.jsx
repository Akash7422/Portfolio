import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
        <a href="https://www.linkedin.com/in/akash77502a185/" target="__blank"><BsLinkedin /></a>
        <a href="http://Facebook.com" target="__blank"><BsFacebook /> </a>
        <a href="http://Twiter.com" target="__blank"><BsTwitter /> </a>

            
        </div>
    )
}

export default HeaderSocial;
