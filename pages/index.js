import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope, faPhone,faCalendarDays, faArrowDownLong, faBarsStaggered, faXmark} from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faTiktok, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import contoh from '../Source/Main-Photo.svg';
import Typewriter from 'typewriter-effect';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import project1 from '../Source/UI-UX.png';
import project2 from '../Source/crazycars.png';
import project3 from '../Source/website.png';
import project4 from '../Source/videoEditing.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from '../components/NavBar'



export default function Home() {
  const settings = {
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
<>
<title>Pindra-Portofolio</title>
    <div className="fixed md:fixed w-screen h-full overflow-scroll scroll-smooth font-poppins overflow-x-hidden ">
    <NavBar/>
     {/* Home Page */}
    <div id="home" className="bg-gradient-to-r from-[#BA74FF] to-[#21BCFF] w-full h-[520px] -z-10 top-0 absolute">
      <section className=" h-full mb-96 xl:mb-[300px]">  
        <div className=" md:flex w-screen md:flex-col md:items-center md:mt-12 xl:mt-24 xl:hidden items-center flex justify-center">
            <div className=" relative min-w-[300px] min-h-[260px] md:w-[370px] md:h-[320px] md:mx-52 mt-20 mb-12 mb xl:mx-44 shadow-lg shadow-gray-500/40 rounded-lg">
              <Image src={contoh} fill alt="Pindra" className="rounded-lg"/>
            </div>
        </div>

        <div className="font-poppins xl:flex block xl:py-0 md:flex md:flex-col mx-8 mb-96 md:border-2 md:mx-13 md:-mt-52 md:pt-44 xl:pt-0 md:pb-20 xl:mx-20 xl:my-36 md:bg-white md:rounded-lg">
          <div className="xl:flex xl:p-10">
            <div className="hidden md:hidden xl:items-center  xl:flex xl:justify-center xl:mx-0">
              <div className="xl:flex relative w-90 h-auto md:w-[360px] md:h-[260px] md:mx-52 xl:mx-0 xl:my-0 xl:w-[600px] xl:h-[550px] bg-white shadow-lg shadow-gray-500/40 rounded-lg">
                <Image src={contoh} fill alt="Pindra" className="rounded-lg"/>
              </div>
            </div>   
              <div className="md:flex md:justify-center xl:h-fit xl:flex xl:flex-col xl:mx-10">
                <div className="md:mr-40 md:w-[220px] md:pl-5 xl:w-fit">
                  <p className="font-semibold text-xs md:text-sm xl:text-base opacity-90 tracking-widest ">HELLO EVERYBODY, I`AM</p>
                  <p className="font-black leading-6 text-[20px] md:text-[30px] xl:text-4xl xl:w-[18rem] md:w-[16rem] md:leading-8 w-[13rem] mt-2 tracking-wide">I KADEK PINDRA DWI PERMANA</p>
                  <p className="font-bold text-sm md:text-base xl:text-lg tracking-wider mt-4">Junior Web Designer</p>
                  <p className="text-sm leading-5 md:w-72 md:text-base xl:text-lg xl:w-96 xl:text-left md:leading-6 tracking-wide text-justify opacity-90 mt-8">Here you will see about myself and what abilities I have. Perseverance, Discipline, Not giving up easily, Always trying new things are principles that I have applied since childhood.</p>
                </div>
                <div className="md:flex md:flex-col md:float-left md:w-[300px] xl:w-fit">
                  <div className="md:flex md:ml-5">
                    <div className="flex w-full h-full mt-3 items-center md:float-left">
                      <div className="block  w-9 h-full leading-9 opacity-70">
                        <FontAwesomeIcon icon={faHouse} className="fas fa-house text-xl md:text-2xl xl:text-3xl "/>
                        <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope text-xl md:text-2xl xl:text-3xl"/>
                        <FontAwesomeIcon icon={faPhone} className="fas fa-phone text-xl md:text-2xl xl:text-3xl"/>
                        <FontAwesomeIcon icon={faCalendarDays} className="fas fa-calendar-days text-xl md:text-2xl xl:text-3xl"/>
                      </div>
                      <div className="flex justify-between w-full h-full items-center">
                        <div className="flex flex-col space-y-5 h-full md:space-y-3.5">
                          <p className="text-xs md:text-base md:ml-3 xl:ml-6 xl:text-lg md:font-semibold md:tracking-wide xl:tracking-wider">Jalan Sibanggede I No. 23</p>
                          <p className="text-xs md:text-base md:ml-3 xl:ml-6 xl:text-lg md:font-semibold md:tracking-wide xl:tracking-wider">kkpindra@21gmail.com</p>
                          <p className="text-xs md:text-base md:ml-3 xl:ml-6 xl:text-lg md:font-semibold md:tracking-wide xl:tracking-wider">+62 83115454057</p>
                          <p className="text-xs md:text-base md:ml-3 xl:ml-6 xl:text-lg md:font-semibold md:tracking-wide xl:tracking-wider">October 21th 2006</p>
                        </div>
                      </div> 
                      <div className=" flex flex-col md:flex-row  leading-3 md:hidden">
                        <a href="https://www.instagram.com/kpindra_?igshid=ODA1NTc5OTg5Nw==" target="blank" className="cursor-pointer my-1 md:mx-2"> <FontAwesomeIcon icon={faSquareInstagram} className="text-4xl"/></a>
                        <a href="https://www.tiktok.com/@4phinnn?is_from_webapp=1&sender_device=pc" target="blank" className="cursor-pointer my-1 md:mx-2"> <FontAwesomeIcon icon={faTiktok} className="text-3xl"/></a>
                        <a href="https://github.com/KadekPindra" target="blank" className="cursor-pointer my-1 md:mx-2"> <FontAwesomeIcon icon={faSquareGithub} className="text-4xl"/></a>               
                      </div>              
                    </div>              
                  </div>
                  <div className="md:flex-row xl:flex leading-3 hidden md:flex md:mx-24">
                        <a href="https://www.instagram.com/kpindra_?igshid=ODA1NTc5OTg5Nw==" target="blank" className="cursor-pointer my-1 md:mx-3 md:mt-[75px] xl:mt-6"> <FontAwesomeIcon icon={faSquareInstagram} className="text-4xl md:text-5xl"/></a>
                        <a href="https://www.tiktok.com/@4phinnn?is_from_webapp=1&sender_device=pc" target="blank" className="cursor-pointer my-1 md:mx-3 md:mt-[75px] xl:mt-6"> <FontAwesomeIcon icon={faTiktok} className="text-3xl md:text-[45px]"/></a>
                        <a href="https://github.com/KadekPindra" target="blank" className="cursor-pointer my-1 md:mx-3 md:mt-[75px] xl:mt-6"> <FontAwesomeIcon icon={faSquareGithub} className="text-4xl md:text-5xl"/></a>               
                  </div>
                </div>            
              </div>              
            </div> 
          </div>
      </section>

      <div className="flex flex-col md:mt-2 mt-5 opacity-70 w-full items-center justify-center">
        <div className=" text-xs md:text-base xl:text-xl font-semibold md:mt-14 xl:-mt-10 -mt-12">
          <Typewriter
          options = {{
            autoStart : true,
            loop : true,
            delay : 50,
            strings: ['let`s see about me!','let`s see what i can do!','let`s see my projects!'],
          }}
          />
        </div>
          <FontAwesomeIcon icon={faArrowDownLong} bounce size="lg" className="text-sm my-3"/>
      </div>
     {/* Home Page end */}


     {/* About Page */}
      <div id="about"  className="h-fit w-full block justify-center ">
        <p className="pt-14 text-xl md:text-3xl xl:text-4xl font-bold flex justify-center">About Me</p>

        <div className="mx-4 md:mx-8 xl:mx-20 bg-white p-4 pb-10 mt-7 border h-auto flex flex-col md:flex-row shadow-lg shadow-gray-500/40">
          <div className="flex flex-col md:px-10 md:w-auto xl:w-1/2 xl:px-12">
            <p className="text-base md:text-lg xl:text-xl font-semibold font-semibold-10 my-4 md:my-5 tracking-wider">a glimpse of me</p>
            <p className="text-sm md:text-base xl:text-lg text-justify leading-4 tracking-widest md:w-[272px] xl:w-fit">I am a novice programmer with a primary focus on website development. Over the past few months, I have embarked on this journey with enthusiasm and a keen interest in gaining a deeper understanding of the programming world. </p>
            <br/>
            <p className="text-sm md:text-base xl:text-lg text-justify leading-4 tracking-widest md:w-[272px] xl:w-fit">My experience as a beginner programmer includes exploring various programming languages such as HTML, CSS, and JavaScript to create visually appealing and functional interfaces for users.</p>
            <div className=" w-full flex items-center justify-center xl:justify-start"><a  className="text-sm md:text-base xl:text-xl font-semibold mt-4 py-2 px-6 w-fit border-2 border-blue-400 rounded-full cursor-pointer transition-all duration-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white" href="#project" ><button>My Projects </button></a></div>
            
          </div>

          <div className="md:px-10 md:w-full xl:w-1/2 xl:px-12">
            <p className="text-base xl:text-xl font-semibold my-4 md:my-5 mb-6 tracking-wider">my skills</p>
            <div className="flex justify-between my-2 tracking-wider md:hidden xl:flex ">
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">HTML</div>
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">CSS</div>
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">JS</div>
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">Java</div>
            </div>
            <div className="flex items-center justify-between my-2 tracking-wider md:hidden xl:flex">
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">UI/UX</div>
              <div className=" text-sm xl:text-lg font-semibold border w-fit py-2 px-3 rounded-md bg-[#E5E5E5]">Phyton</div>
              <div className=" text-xs xl:text-lg font-semibold border w-fit py-2.5 px-2 rounded-md items-center bg-[#E5E5E5]">Laravel Basic</div>  
            </div>
            <div className="hidden md:flex md:justify-between md:my-4 tracking-widest xl:hidden">
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">HTML</div>
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">CSS</div>
            </div>
            <div className="hidden md:flex md:justify-between md:my-4 tracking-widest xl:hidden">
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">JS</div>
              <div className=" text-sm md:text-base opacity-90  font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">Java</div>
            </div>
            <div className="hidden md:flex md:justify-between md:my-4 tracking-widest xl:hidden">
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">UI/UX</div>
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">Phyton</div>
            </div>
            <div className="hidden md:flex md:justify-between md:my-4 tracking-widest xl:hidden">
              <div className=" text-sm md:text-base opacity-90 font-semibold border w-fit py-2 px-5 rounded-md bg-[#E5E5E5]">Laravel Basic</div>  
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mt-2 opacity-70 w-full items-center justify-center xl:mt-10 mt-16">
        <div className=" text-xs md:text-base xl:text-xl font-semibold md:mt-14">
          <Typewriter
          options = {{
            autoStart : true,
            loop : true,
            delay : 50,
            strings: ['Let`s check my projects!','let`s see my projects!'],
          }}
          />
        </div>
          <FontAwesomeIcon icon={faArrowDownLong} bounce size="lg" className="text-sm my-3 xl:mb-32 md:mb-20"/>
      </div>        
      </div> 

      {/* PROJECT PAGE start */}
      
      <div id="project" class="areahp">
      <div className="md:hidden xl:hidden font-poppins">
      <div className="w-full  h-96 bg-gradient-to-t  from-[transparent] to-[#17002c] xl:-mb-36 xl:mt-32 -z-50 md:flex xl:flex items-center" >
          <div className="flex w-full justify-center flex-col items-center text-white">
              <p className="text-2xl font-semibold font-poppins  tracking-wider mt-20">My Projects</p>
              <p className="font-poppins xl:mt-10 xl:text-base xl:font-semibold w-[20rem] mt-5 mx-5 text-center tracking-wider">The following are projects that I have worked on and have mastered well.  All of these projects are the result of independent practice to hone my own skills.</p>
            </div>
          </div>
            <div className=" h-fit w-full xl:hidden md:hidden -mt-16">
              <div className="  w-full flex flex-col items-center">                                                                 
            </div>
          </div>
      <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {/* CONTENT */}
        <div className="rounded-lg">
                <Slider {...settings} className="mx-10 relative">                
                  <div className="bg-white p-3 w-fit h-[570px] flex justify-center rounded-lg shadow-xl shadow-gray-700/60 mb-40 ">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="max-w-[20rem] "><Image src={project1}  alt="Figma" className="rounded-lg"/></div>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-xl font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>UI&UX Application Design</b></h1>
                        <p className="max-w-[20rem] text-sm h-52 mb-6 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is my first project, namely making a sketch or blue print of the design of an application.  I took the theme of the application as an online shopping application that focuses on selling perfume.  I used Figma to make it, it contains about 83 pages or Frames.</p>
                        <Link target="blank" href="https://www.figma.com/file/VI2asBoYPTjfxWgV5bUZUG/HUSTLE-PERFUME?type=design&node-id=0%3A1&mode=design&t=cbEGEWsJvOyLQ9qa-1"><button className="relative  py-2 px-12 w-fit text-sm  font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-full  ">Try it</button></Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 w-fit h-[570px] flex justify-center rounded-lg shadow-xl shadow-gray-700/60 mb-40">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="max-w-[20rem] "><Image src={project3} alt="Website" className="rounded-lg"/></div>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-xl font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Portofolio Website</b></h1>
                        <p className="max-w-[20rem] text-xs h-fit mb- text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is my second project, namely creating a portfolio website to introduce myself on the website.  In this project I used the object of my friend who works as a photographer.  The website contains a glimpse of his personal data, skills, projects he has worked on, and contacts to contact him.  This project uses HTML, CSS and JavaScript to create it and VS-Code as the supporting software. </p>
                        <Link target="blank" href="https://kadekpindra.github.io/Friend-Portofolio-/"><button className="relative py-2 px-12 w-fit text-sm  font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-full  ">Try it</button></Link>
                      </div>
                    </div>

                  </div><div className="bg-white p-3 w-fit h-[570px] flex justify-center rounded-lg shadow-xl shadow-gray-700/60 mb-40">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="max-w-[20rem] "><Image src={project2} alt="Scratch" className="rounded-lg"/></div>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-xl font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Mini Scratch Game</b></h1>
                        <p className="max-w-[20rem] text-sm h-fit text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is one of my projects, namely a simple 2D game.  I made a game with the theme of cars driving forward and avoiding cars coming from the opposite direction.  The system of this game is that the longer the car drives, the player`s score will continue to increase.  This is one of my own ways of using logical thinking to solve a problem.</p>
                        <Link target="blank" href="https://scratch.mit.edu/projects/939327427"><button className="relative py-2 px-12 w-fit text-sm  font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-full  ">Try it</button></Link>
                      </div>
                    </div>

                  </div><div className="bg-white p-3 w-fit h-[570px] flex justify-center rounded-lg shadow-xl shadow-gray-700/60 mb-40">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="max-w-[20rem] "><Image src={project4} alt="Video Editing" className="rounded-lg"/></div>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-xl font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Video Editing</b></h1>
                        <p className="max-w-[20rem] text-sm h-52 mb-6 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is one way for me to turn my gaming hobby into a positive thing.  I record a moment in a match and then edit it in a video editor such as Capcut and Adobe Premiere.  After that, I uploaded the edited video to my personal TikTok account.</p>
                        <Link target="blank" href="https://www.tiktok.com/@4phinnn/video/7284655782908513541?is_from_webapp=1&web_id=7269032866125121026"><button className="relative py-2 px-12 w-fit text-sm  font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-full  ">Try it</button></Link>
                      </div>
                    </div>
                  </div>
                </Slider> 
          </div>
        {/* END CONTENT */}
        </div>
        </div>


      <div class="area hidden xl:flex xl:flex-col md:flex md:flex-col">
        <div className="w-full h-96  xl:-mb-36 bg-gradient-to-t  from-[transparent] to-[#17002c] -z-50 md:flex xl:flex items-center" >
          <div className="flex w-full justify-center flex-col items-center text-white">
              <p className="xl:text-3xl font-semibold font-poppins xl:mt-10 md:-mt-10  tracking-wider">My Projects</p>
              <p className="font-poppins xl:mb-14 xl:mt-10 xl:text-base xl:font-semibold w-[50rem] text-center tracking-wider">The following are projects that I have worked on and have mastered well.  All of these projects are the result of independent practice to hone my own skills.</p>
            </div>
          </div>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>


        <div className="font-poppins   xl:mt-14  xl:flex hidden md:hidden">
          <div className="xl:mx-20  xl:w-full xl:h-fit xl:p-5">
            
            <div className="w-full xl:h-fit  xl:flex xl:justify-between xl:my-10">
              <div className="w-fit h-fit bg-white xl:mx-6 items-center flex flex-col xl:p-2 xl:rounded-lg shadow-xl shadow-gray-700/60">
                <div className="xl:w-[500px] relative md:rounded-lg "><Image className="rounded-lg" src={project1} alt="Figma"/></div>
                <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>UI & UX Application Design</b></h1>
                <hr className="leading-3"/>
                <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is my first project, namely making a sketch or blue print of the design of an application.  I took the theme of the application as an online shopping application that focuses on selling perfume.  I used Figma to make it, it contains about 83 pages or Frames.</p>
                <Link target="blank" href="https://www.figma.com/file/VI2asBoYPTjfxWgV5bUZUG/HUSTLE-PERFUME?type=design&node-id=0%3A1&mode=design&t=cbEGEWsJvOyLQ9qa-1"><button className="relative py-2 px-10 w-fit xl:my-5 xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
              <div className="w-fit h-fit bg-white xl:mx-6 items-center flex flex-col xl:p-2 xl:rounded-lg shadow-xl shadow-gray-700/60">
              <div className="xl:w-[500px] relative md:rounded-lg "><Image className="rounded-lg" src={project3} alt="Website"/></div>
                <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Portofolio Website</b></h1>
                <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is my second project, namely creating a portfolio website to introduce myself on the website.  In this project I used the object of my friend who works as a photographer.  The website contains a glimpse of his personal data, skills, projects he has worked on, and contacts to contact him.  This project uses HTML, CSS and JavaScript to create it and VS-Code as the supporting software. </p>
                <Link target="blank" href="https://kadekpindra.github.io/Friend-Portofolio-/"><button className="relative py-2 px-10 w-fit xl:my-5 xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
            </div>

            <div className="w-full xl:h-fit  xl:flex xl:justify-between xl:my-10 xl:mb-20">
              <div className="w-fit h-fit bg-white xl:mx-6 items-center flex flex-col xl:p-2 xl:rounded-lg shadow-xl shadow-gray-700/60">
                <div className="xl:w-[500px] relative md:rounded-lg "><Image className="rounded-lg" src={project2} alt="Scratch"/></div>
                <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Mini Scratch Game</b></h1>
                <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is one of my projects, namely a simple 2D game.  I made a game with the theme of cars driving forward and avoiding cars coming from the opposite direction.  The system of this game is that the longer the car drives, the player`s score will continue to increase.  This is one of my own ways of using logical thinking to solve a problem.</p>
                <Link target="blank" href="https://scratch.mit.edu/projects/939327427"><button className="relative py-2 px-10 w-fit xl:my-5 xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
              <div className="w-fit h-fit bg-white xl:mx-6 items-center flex flex-col xl:p-2 xl:rounded-lg shadow-xl shadow-gray-700/60">
              <div className="xl:w-[500px] relative md:rounded-lg "><Image className="rounded-lg" src={project4} alt="Tiktok"/></div>
                <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Video Editing</b></h1>
                <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 xl:text-base font-semibold leading-6 md:text-sm">This is one way for me to turn my gaming hobby into a positive thing.  I record a moment in a match and then edit it in a video editor such as Capcut and Adobe Premiere.  After that, I uploaded the edited video to my personal TikTok account.</p>
                <Link target="blank" href="https://www.tiktok.com/@4phinnn/video/7284655782908513541?is_from_webapp=1&web_id=7269032866125121026"><button className="relative py-2 px-10 w-fit xl:my-5 xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
            </div>

          </div>
        </div>



        <div className="h-fit xl:mx-24 md:flex flex md:-mt-20 xl:hidden">
          <div className=" w-full h-fit md:h-full  xl:mt-20 font-poppins xl:pb-10 md:flex md:flex-col md:mx-10 ">
            <div className=" w-full flex  xl:my-20 md:flex-col">

              <div className="p-4 md:my-2  bg-white  bg xl:w-fit flex xl:flex-col xl:items-center xl:ml-20 xl:mr-1 border rounded-lg shadow-xl shadow-gray-700/60 xl:h-[650px] md:flex md:flex-col">
                <div className="flex ">
                  <div className="xl:w-[500px] md:max-w-[300px] relative md:rounded-lg"><Image src={project1} alt="Figma"/></div>
                  <span className="md:flex md:flex-col md:ml-10">
                  <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>UI & UX Application Design</b></h1>
                  <p className=" xl:w-[30rem] md:min-w-[20rem]  xl:h-44 text-justify xl:mt-5 text-base font-semibold leading-6 md:text-sm">This is my first project, namely making a sketch or blue print of the design of an application.  I took the theme of the application as an online shopping application that focuses on selling perfume.  I used Figma to make it, it contains about 83 pages or Frames.</p>
                  </span>
                  <Link className="md: hidden" target="blank" href="https://www.figma.com/file/VI2asBoYPTjfxWgV5bUZUG/HUSTLE-PERFUME?type=design&node-id=0%3A1&mode=design&t=cbEGEWsJvOyLQ9qa-1"><button className="relative py-2 px-10 w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
                </div>
                <Link className="hidden xl:hidden  w-full mt-12 mb-5  md:flex items-center justify-center" href="https://www.figma.com/file/VI2asBoYPTjfxWgV5bUZUG/HUSTLE-PERFUME?type=design&node-id=0%3A1&mode=design&t=cbEGEWsJvOyLQ9qa-1"><button className="relative py-2 px-[300px] w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
              <div className="p-4 md:my-2  bg-white  bg xl:w-fit flex xl:flex-col xl:items-center xl:ml-20 xl:mr-1 border rounded-lg shadow-xl shadow-gray-700/60 xl:h-[650px] md:flex md:flex-col">
                <div className="flex ">
                  <div className="xl:w-[500px] md:max-w-[300px] relative md:rounded-lg"><Image src={project3} alt="Website"/></div>
                  <span className="md:flex md:flex-col md:ml-10">
                  <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Portofolio Website</b></h1>
                  <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 text-base font-semibold leading-6 md:text-sm">This is my second project, creating a portfolio website to introduce myself on the website.  In this project I used the object of my friend who works as a photographer.  The website contains a glimpse of his personal data, skills, projects he has worked on, and contacts to contact him.  This project uses HTML, CSS and JavaScript to create it and VS-Code as the supporting software. </p>
                  </span>
                  <Link className="md: hidden" target="blank" href="https://kadekpindra.github.io/Friend-Portofolio-/"><button className="relative py-2 px-10 w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
                </div>
                <Link className="hidden xl:hidden  w-full mt-12 mb-5  md:flex items-center justify-center" href="https://kadekpindra.github.io/Friend-Portofolio-/"><button className="relative py-2 px-[300px] w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
              <div className="p-4 md:my-2  bg-white  bg xl:w-fit flex xl:flex-col xl:items-center xl:ml-20 xl:mr-1 border rounded-lg shadow-xl shadow-gray-700/60 xl:h-[650px] md:flex md:flex-col">
                <div className="flex ">
                  <div className="xl:w-[500px] md:max-w-[300px] relative md:rounded-lg"><Image src={project2} alt="Scracth"/></div>
                  <span className="md:flex md:flex-col md:ml-10">
                  <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Mini Game Scratch</b></h1>
                  <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 text-base font-semibold leading-6 md:text-sm">This is one of my projects, namely a simple 2D game.  I made a game with the theme of cars driving forward and avoiding cars coming from the opposite direction.  The system of this game is that the longer the car drives, the player`s score will continue to increase.  This is one of my own ways of using logical thinking to solve a problem.</p>
                  </span>
                  <Link className="md: hidden" target="blank" href="https://scratch.mit.edu/projects/939327427"><button className="relative py-2 px-10 w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
                </div>
                <Link className="hidden xl:hidden  w-full mt-12 mb-5  md:flex items-center justify-center" href="https://scratch.mit.edu/projects/939327427"><button className="relative py-2 px-[300px] w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
              <div className="p-4 md:my-2  bg-white md:mb-20 bg xl:w-fit flex xl:flex-col xl:items-center xl:ml-20 xl:mr-1 border rounded-lg shadow-xl shadow-gray-700/60 xl:h-[650px] md:flex md:flex-col">
                <div className="flex ">
                  <div className="xl:w-[500px] md:max-w-[300px] relative md:rounded-lg"><Image src={project4} alt="Video"/></div>
                  <span className="md:flex md:flex-col md:ml-10">
                  <h1 className="font-poppins xl:font-black xl:text-xl xl:mt-4 md:font-[1000]"><b>Video Editing</b></h1>
                  <p className=" xl:w-[30rem] md:min-w-[20rem] xl:h-44 text-justify xl:mt-5 text-base font-semibold leading-6 md:text-sm">This is one way for me to turn my gaming hobby into a positive thing.  I record a moment in a match and then edit it in a video editor such as Capcut and Adobe Premiere.  After that, I uploaded the edited video to my personal TikTok account.</p>
                  </span>
                  <Link className="md: hidden" target="blank" href="https://www.tiktok.com/@4phinnn/video/7284655782908513541?is_from_webapp=1&web_id=7269032866125121026"><button className="relative py-2 px-10 w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
                </div>
                <Link className="hidden xl:hidden  w-full mt-12 mb-5  md:flex items-center justify-center" href="https://www.tiktok.com/@4phinnn/video/7284655782908513541?is_from_webapp=1&web_id=7269032866125121026"><button className="relative py-2 px-[300px] w-fit xl:text-xl font-bold tracking-wider hover:shadow-none hover:bg-[#27CBFF]  hover:text-white transition duration-500 border-[#27CBFF] shadow-lg shadow-[#7ED8FF] border-2 rounded-lg  xl:mt-10">Try it</button></Link>
              </div>
            </div>
          <div>
        </div>
        </div>
      </div>
      
      </div> 

      {/* FOOTER */}
      <div className="bg-white h-fit flex flex-col md:flex mx-16 items-center font-poppins xl:mx-52">
            <div className=" w-full h-fit md:flex md:justify-between pb-2 border-b-2 border-b-black mt-5">
              <div>
                <p className=" w-fit text-lg font-bold md:text-xl mb-1 xl:text-2xl"><b>I KADEK PINDRA DWI PERMANA</b></p>
                <p className="w-full md:w-[16rem] text-sm text-justify xl:text-base xl:w-[30rem]"><i> A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</i></p>
              </div>
              <div className="flex flex-col mt-5 md:my-0">
                <p className="text-lg font-semibold md:text-xl xl:text-2xl">navigate :</p>
                <ul className="">
                  <li className="flex flex-col md:font-semibold">
                    <a className="text-sm xl:text-lg my-1" href='#home'>home</a>
                    <a className="text-sm xl:text-lg my-1" href='#about'>about</a>
                    <a className="text-sm xl:text-lg my-1" href='#project'>projects</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-semibold mt-3 md:my-0 md:text-xl xl:text-2xl">Contact me</p>
                <div className=" flex  leading-3 md:flex md:flex-col md:float-right">
                  <a href="https://www.instagram.com/kpindra_?igshid=ODA1NTc5OTg5Nw==" target="blank" className="cursor-pointer my-1 mx-1 md:mx-2"> <FontAwesomeIcon icon={faSquareInstagram} className="text-3xl md:text-4xl xl:text-5xl"/></a>
                  <a href="https://www.tiktok.com/@4phinnn?is_from_webapp=1&sender_device=pc" target="blank" className="cursor-pointer my-1 mx-1 md:mx-2"> <FontAwesomeIcon icon={faTiktok} className="text-2xl md:text-4xl xl:text-5xl"/></a>
                  <a href="https://github.com/KadekPindra" target="blank" className="cursor-pointer my-1 mx-1 md:mx-2"> <FontAwesomeIcon icon={faSquareGithub} className="text-3xl md:text-4xl xl:text-5xl"/></a>               
                </div>
              </div>
            </div>
      </div>
      <div className="w-full py-5 flex items-center justify-center text-center">
        <p className="text-xs md:text-sm w-fit xl:text-base"><i>CopyRights 2023. Made by I Kadek Pindra Dwi Permana</i></p>
      </div>
      {/* FOOTER END */}

    </div>
    </div> 
    <SpeedInsights />  
    <Analytics />
 </>   

  )
}


