"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import closeBtn from '../Source/xmark-solid.svg'
import openBtn from '../Source/bars-staggered-solid.svg'


const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    const clickNavbar = () => {
        setNavbar(!navbar)
    }

    return (
        <>
        <div className="flex flex-row mx-auto justify-between items-center h-16 text-white md:h-20 lg:h-28 w-screen">
       {/* start NAVBAR KIRI */}
        <div className="font-poppins flex items-center space-x-2 text-xs md:text-base">
          <Link legacyBehavior href="/">
            <a className="mx-3 md:mx-10 xl:mx-20 flex space-x-2 md:space-x-4 items-center ">
              <span className="font-semibold leading-[160%] w-12 md:w-28 xl:text-lg xl:w-36 xl:tracking-widest md:tracking-widest tracking-wider">It`s Me Pindra</span>
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

          <a target="blank" href="https://drive.google.com/u/0/uc?id=1rEejp6O41B4lLcuaAMkX3nK2_IgqDQ9m&export=download"><button className="font-poppins tracking-wider border-spacing-1 text-xs md:text-sm mx-2 py-2 px-4 md:mr-10 xl:mr-20 xl:text-base leading-[150%] rounded-full border-blue-600 border-2 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:transition duration-500 hover:duration-500 hover:font-semibold hover:text-white opacity-80">Download CV</button></a>
          
          <div className="px-3 md:hidden xl:hidden lg:hidden flex ">
            <button className='duration-200 transition hover:animate-putar' onClick={clickNavbar}>
              {navbar ? (
                <Image src={closeBtn} width={20} height={20} alt="close" onClick={() => setNavbar(!navbar)} />
              ) : (
                <Image src={openBtn} width={20} height={20} alt="open" onClick={() => setNavbar(!navbar)} />
              )}
            </button>
          </div>            
        </div>
        
        {/* end NAVBAR KANAN */}   
      </div>
      
      {navbar && (
        <div className=" h-screen flex md:hidden  xl:hidden transition ease-in-out animate-geser duration-400 -mt-20 py-20 " >
          <div className='md:hidden flex items-center justify-center h-1/2 w-full bg-black/50 backdrop-blur-sm text-center rounded-md '>
            <ul className=" md:hidden items-center justify-center text-center align-middle"> 
              <li className="flex flex-col tracking-widest font-semibold w-full justify-center text-center items-center">
                <a onClick={() => setNavbar(!navbar)} href="#home" className="flex font-normal py-5 text-white">home</a> 
                <a onClick={() => setNavbar(!navbar)} href="#about" className="flex font-normal py-5 text-white">about</a> 
                <a onClick={() => setNavbar(!navbar)} href="#project" className="flex font-normal py-5 text-white">projects</a>                                   
              </li>   
            </ul>        
          </div>
        </div>
        
       )}

        </>
    )
}

export default NavBar;
