"use client";
import react from "react";
import { faHouse, faEnvelope, faPhone,faCalendarDays, faArrowDownLong, faBarsStaggered, faXmark} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid';
import closeBtn from '../Source/xmark-solid.svg'
import openBtn from '../Source/bars-staggered-solid.svg'
import imageProfile from '../Source/author.jpg';
const fileDownload ="http://localhost:3000/CV-IKadekPindraDwiPermana.pdf"

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    const clickNavbar = () => {
        setNavbar(!navbar)
    }

    const downloadFile = (url) => {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }

    return (
        <>
        <div className="flex flex-row mx-auto justify-between items-center h-16 text-white md:h-20 lg:h-28 w-screen">
       {/* start NAVBAR KIRI */}
        <div className="font-poppins flex items-center space-x-2 text-xs md:text-base">
          <Link legacyBehavior href="/">
            <a className="mx-3 md:mx-10 xl:mx-20 flex space-x-2 md:space-x-4 items-center ">
              <div className="w-10 h-10 md:w-12 md:h-12 xl:w-15 xl:h-15 relative">
              <Image src={imageProfile} fill alt="Icon Pindra" className="rounded-full object-cover "/>
              </div>
              <span className="font-semibold leading-[160%] w-10 md:w-28 xl:text-lg xl:w-32">It`s Me Pindra</span>
            </a>
          </Link>
        </div>
        {/* end NAVBAR KIRI */}

        {/* start NAVBAR KANAN */}
        <div className="flex items-center justify-between font-semibold">
          <nav className="hidden md:block xl:block">
            <ul className="flex"> 
                <li className="flex tracking-widest font-semibold">
                    <a href="#home" className="flex justify-between mx-2 opacity-80 xl:text-base md:text-sm xl:mx-10">home</a> 
                    <a href="#about" className="flex justify-between mx-2 opacity-80 xl:text-base md:text-sm xl:mx-10">about</a> 
                    <a href="#project" className="flex justify-between mx-2 opacity-80 xl:text-base md:text-sm xl:mx-10">projects</a>                                   
                </li>   
            </ul>
          </nav>

          <a><button onClick={() => {downloadFile(fileDownload);}} className="font-poppins tracking-wider border-spacing-1 text-xs md:text-sm mx-2 py-2 px-4 md:mr-10 xl:mr-20 xl:text-base leading-[150%] rounded-full border-blue-600 border-2 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:transition duration-500 hover:duration-500 hover:font-semibold hover:text-white opacity-80">Download CV</button></a>
          <div className="px-3 md:hidden xl:hidden lg:hidden flex ">
            <button className='transition ease-in-out duration-700 peer' onClick={clickNavbar}>
              {navbar ? (
                <Image src={closeBtn} width={20} height={20} alt="close"/>
              ) : (
                <Image src={openBtn} width={20} height={20} alt="open"/>
              )}
            </button>
          </div>            
        </div>
        {/* end NAVBAR KANAN */}   
      </div>

      {navbar && (
         <div className="w-full flex justify-end md:hidden xl:hidden  ">
            <div className='md:hidden flex items-center justify-center px-20 py-20 bg-white/40 backdrop-blur-sm text-center rounded-xl '>
              <ul className=" md:hidden items-center justify-center text-center align-middle"> 
                <li className="flex flex-col tracking-widest font-semibold w-full justify-center text-center items-center">
                  <a onClick={() => setNavbar(!navbar)} href="#home" className="flex py-5">home</a> 
                  <a onClick={() => setNavbar(!navbar)} href="#about" className="flex  py-5">about</a> 
                  <a onClick={() => setNavbar(!navbar)} href="#projecthp" className="flex  py-5">projects</a>                                   
                </li>   
              </ul>        
          </div>
        </div>
       )}



        
        
        
        </>
    )
}

export default NavBar;