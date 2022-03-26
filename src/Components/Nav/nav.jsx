import React, {useState} from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai"; 
import {AiFillBook} from "react-icons/ai"; 
import {RiServiceLine} from "react-icons/ri"; 
import {AiFillMessage} from "react-icons/ai"; 
import "./nav.css";
const Nav = () => {
    const [activeNav, setNav]=useState('#');

    return (
        <nav>
            <a href='#' onClick={() => setNav("#")} className={activeNav ==='#' ? 'active': ''} ><AiOutlineHome /> </a>
            <a href='#about' onClick={() => setNav("about")} className={activeNav ==='about' ? "active": ""}><AiOutlineUser /> </a>
            <a href='#exp'onClick={() => setNav("exp")} className={activeNav ==='exp' ? "active": ""}><AiFillBook /> </a>
            <a href='#services' onClick={() => setNav("services")} className={activeNav ==='services' ? "active": ""}><RiServiceLine /> </a>
            <a href='#contact' onClick={() => setNav("contact")} className={activeNav ==='contact' ? "active": ""}><AiFillMessage /> </a>
        </nav>
    )
}

export default Nav;
