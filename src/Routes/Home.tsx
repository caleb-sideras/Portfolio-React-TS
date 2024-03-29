import React, { FC } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiDjango, SiTypescript, SiJavascript, SiPython, SiSolidity, SiDart, SiCsharp, SiMysql, SiAmazonaws, SiEthereum, SiLinkedin, SiGithub, SiFlutter, SiNodedotjs, SiCplusplus, SiAndroid  } from 'react-icons/si'
import { DiReact, DiJava } from 'react-icons/di'
import { FaVuejs } from 'react-icons/fa'
import { BiLogoGoLang } from 'react-icons/bi'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { OpenUniverse } from '../Components/OpenUniverse'
import profile from '../profile_picture.jpg'

const Home: React.FC = () => {
    return (
        <>
        <div className='flex w-full fill-height border-b-4 animate-fade-in'>
            <div className='w-1/2 pb-16 pl-8 pr-4 pt-8 flex-col flex justify-between'>
                <div className='flex-row flex justify-end items-center gap-1'>
                    <span className='text-xl font-light'>something cool</span>
                    <HiOutlineArrowNarrowRight className='h-6 w-6' />
                </div>

                <div>
                    <h1 className='text-4xl font-bold'>Hi, I'm Caleb</h1>
                    <h2 className='text-2xl font-light'>I'm a software developer</h2>
                    
                </div>

                <div>
                        <img src={profile} alt="Caleb Picture" className="rounded-full max-h-40 max-w-40 mb-4 z-10"></img>
                    <div className='flex flex-row gap-4 flex-wrap max-w-40 justify-center w-40'>
                        <a href="https://www.linkedin.com/in/caleb-sideras-9555b0196/" target="_blank" rel="noopener noreferrer" className='text-xl font-bold'>
                            <SiLinkedin className='h-6 w-6' />
                        </a>
                        <a href="https://github.com/caleb-sideras" target="_blank" rel="noopener noreferrer" className='text-xl font-bold'>
                            <SiGithub className='h-6 w-6' />
                        </a>
                        {/* <a href="https://www.genera.link/" target="_blank" rel="noopener noreferrer" className='text-xl font-bold'>
                            <img src="https://www.genera.link/static/icons/logoV1.svg" alt="genera_icon" className='h-6 w-6' />
                        </a> */}
                        <a href="https://blockscan.com/address/0x36aCd77CA5bF2c84C0a60786581b322546d68193" target="_blank" rel="noopener noreferrer" className='text-xl font-bold'>
                            <SiEthereum className='h-6 w-6' />
                        </a>     
                    </div>
                </div>
            </div>
            <div className='w-1/2 '>
                <OpenUniverse/>
            </div>
        </div>
            <div className='grid max-w-4xl px-4 py-8 gap-4'>
            
            <AnimationOnScroll duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn">
                <div className='grid grid-cols-2 justify-center items-start'>
                    <span className='text-xl mt-3'>Front-end:</span>
                    <div className='flex flex-row flex-wrap'>
                        <DiReact className='button-icon-left' />
                        <FaVuejs className='button-icon-left' />
                        <span className='font-bold self-center'>HTMX</span>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll delay={0.1} duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn">
                <div className='grid grid-cols-2 justify-center items-start'>
                    <span className='text-xl mt-3'>Environments:</span>
                    <div className='flex flex-row gap-4 flex-wrap'>
                        <SiDjango className='button-icon-left' />
                        <SiAndroid className='button-icon-left' />
                        <SiFlutter className='button-icon-left' />
                        <SiNodedotjs className='button-icon-left' />
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll delay={0.2} duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn">
                <div className='grid grid-cols-2 justify-center items-start'>
                    <span className='text-xl mt-3'>Languages:</span>
                    <div className='flex flex-row gap-4 flex-wrap'>
                        <BiLogoGoLang className='button-icon-left' />
                        <SiTypescript className='button-icon-left' />
                        <SiJavascript className='button-icon-left' />
                        <SiPython className='button-icon-left' />
                        <DiJava className='button-icon-left' />
                        <SiDart className='button-icon-left' />
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll delay={0.3} duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn">
                <div className='grid grid-cols-2 justify-center items-start'>
                    <span className='text-xl mt-3'>Other:</span>
                    <div className='flex flex-row gap-4 flex-wrap'>
                        <SiMysql className='button-icon-left' />
                        <SiAmazonaws className='button-icon-left' />
                        <SiEthereum className='button-icon-left' />
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll delay={0.4} duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn">
            <div className='grid max-w-4xl px-4 py-8 gap-4'>
                <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4'>
                    <span className='font-bold text-3xl my-8 text-accent'>About</span>
                        <span className='text-xl font-light w-full pb-4 text-center'>Detail-oriented Junior Developer that prioritizes value creation through solving difficult engineering challenges. Values writing structured code with a strong emphasis on scalability and readability. Looking forward to creating novel solutions.</span>
                        <AnimationOnScroll delay={0.1} duration={1} animateOnce={true} initiallyVisible={false} animateIn="animate__fadeIn" className='text-center w-full text-accent flex flex-col'>
                            <span>caleb.sideras@oulook.com</span>
                            <span>+1 (617) 480 1896</span>
                        </AnimationOnScroll>
                </div>
            </div>
        </AnimationOnScroll>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
        
    )
}

export default Home