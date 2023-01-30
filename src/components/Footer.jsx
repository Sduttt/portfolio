import React from "react";
import wLogo from './assets/logo-white.png';
import Logo from './assets/logo-black.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { ImBlog } from 'react-icons/im';
import Coffee from './assets/black-button.png'

function Footer({theme}){
    return(
        <div className="flex flex-col justify-center items-center dark:text-white">
            <img src={theme === 'dark' ? wLogo : Logo} alt="" className="w-40 mt-4" />
            <a href="https://www.buymeacoffee.com/sduttt" className="w-48 mb-4"> <img src={Coffee} alt="buymeacoffee" /> </a>
            <h2 className="font-zen">Living, Learning & Coding</h2>
            <h2 className="font-zen">Everyday...</h2>
            <div className="text-3xl my-2 flex">
                <a href="https://www.facebook.com/profile.php?id=100073951804006" target="_blank" rel="noreferrer"><FaFacebook className="mx-2 hover:text-[#3b5998]" /> </a> 
                <a href="https://www.instagram.com/its_subham_dutta/" target="_blank" rel="noreferrer"><GrInstagram className="mx-2 hover:text-pink-600"/> </a> 
                <a href="https://twitter.com/Subhamd88404337" target="_blank" rel="noreferrer"><FaTwitter className="mx-2 hover:text-[#1DA1F2]" /></a> 
                <a href="https://www.linkedin.com/in/subham-dutta-8670b8178/" target="_blank" rel="noreferrer"><FaLinkedin className="mx-2 hover:text-[#0077B5]" /> </a> 
                <a href="https://github.com/Sduttt" target="_blank" rel="noreferrer"><FaGithub className="mx-2 hover:text-[#24292E]" /> </a> 
                <a href="https://sdutta.hashnode.dev/" target="_blank" rel="noreferrer"><ImBlog className="mx-2 hover:text-[#23d1e0]" /> </a> 
            </div>
            <p className="my-3 text-center font-nav text-xs text-gray-700">Created by me ©Subham Dutta, 2023</p>
        </div>
    )
}
export default Footer;