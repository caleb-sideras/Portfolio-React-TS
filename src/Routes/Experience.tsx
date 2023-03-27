import React, { FC } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaVuejs } from 'react-icons/fa'
import { SiAmazonaws, SiAndroid, SiBreaker, SiCplusplus, SiDart, SiDjango, SiDotnet, SiFlutter, SiJava, SiMaterialui, SiMysql, SiPython, SiWebpack, SiXaml } from 'react-icons/si'
import { CgArrowsBreakeH, CgArrowTopRight } from 'react-icons/cg'

type Props = {}

const Projects: React.FC = () => {
    return (

        <div className='py-8 flex flex-col gap-8'>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                {/* <a href="https://genera.link" target='_blank'> */}
                {/* hover:text-accent transition-all */}
                <div className='flex flex-col ml-2 my-8 items-center'>
                    <span className='font-bold text-3xl'>Jr Android Developer</span>
                    <div className='flex-row mt-2'>
                        <span className='text-2xl'>Echelon</span>
                        &nbsp; - &nbsp;
                        <span className='text-2xl'>Full-Time co-op</span>
                    </div>
                    {/* <CgArrowTopRight /> */}
                </div>
                {/* </a> */}

                {/* <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>A web3 platform that enables artists to create, deploy and mint generative NFT collections to the Ethereum or Polygon blockchains.</span> */}
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>
                    <li>Migration of the Reflect Smart Fitness Mirror's API, Business Logic and Design to modern standards.</li>
                    <li>Creating an updated onboarding process for users.</li>
                    <li>Integration of wireless headphones and heart monitors through the Bluetooth API.</li>
                    <li>Project management tools such as Jira, Confluence, and Slack.</li>
                </span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='grid grid-cols-1 justify-center text-left w-72'>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
                        <SiAndroid className='button-icon-left' />
                        +
                        <SiJava className='button-icon-left' />
                    </div>
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://nestapi.echelonfit.com/" className='underline' target='_blank'>Echelon API</a>
                    <a href="https://www.atlassian.com/software/jira" className='underline' target='_blank'>Jira</a>
                    <a href="https://www.atlassian.com/software/confluence?&aceid=&adposition=&adgroup=141041029346&campaign=18380611883&creative=623294432542&device=c&keyword=confluence&matchtype=e&network=g&placement=&ds_kids=p73286407231&ds_e=GOOGLE&ds_eid=700000001542923&ds_e1=GOOGLE&gclsrc=ds" className='underline' target='_blank'>Confluence</a>
                    <a href="https://slack.com/" className='underline' target='_blank'>Slack</a>
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                {/* <a href="https://genera.link" target='_blank'> */}
                {/* hover:text-accent transition-all */}
                <div className='flex flex-col ml-2 my-8 items-center'>
                    <span className='font-bold text-3xl'>Full Stack Developer</span>
                    <div className='flex-row mt-2'>
                        <span className='text-2xl'>Genera</span>
                        &nbsp; - &nbsp;
                        <span className='text-2xl'>Part-time</span>
                    </div>
                    {/* <CgArrowTopRight /> */}
                </div>
                {/* </a> */}

                {/* <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>A web3 platform that enables artists to create, deploy and mint generative NFT collections to the Ethereum or Polygon blockchains.</span> */}
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>
                    <li>Designed, developed and deployed Genera on AWS.</li>
                    <li>Utilized Django in conjunction with CDN Vue.js to create SSR static pages.</li>
                    <li>Brought backend functionally to the client using Pyodide and Webpack, reducing server costs.</li>
                    <li>Achieved reduced deployment and minting fees by utilizing the ERC-1155 multi-token standard.</li>
                </span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='grid grid-cols-2 justify-center text-left w-72'>
                    <span className='text-xl mt-3'>Front-end:</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <FaVuejs className='button-icon-left' />
                        +
                        <SiWebpack className='button-icon-left' />
                    </div>
                </div>
                <div className='grid grid-cols-2 justify-center text-left w-72'>
                    <span className='text-xl mt-3'>Back-end:</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <SiDjango className='button-icon-left' />
                        +
                        <SiMysql className='button-icon-left' />
                    </div>
                </div>
                <div className='grid grid-cols-2 justify-center text-left w-72'>
                    <span className='text-xl mt-3'>Hosted:</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <SiAmazonaws className='button-icon-left' />
                    </div>
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Libraries:
                    <a href="https://web3js.readthedocs.io/en/v1.7.1/" className='underline' target='_blank'>Web3.js</a>
                    <a href="https://web3py.readthedocs.io/en/stable/" className='underline' target='_blank'>Web3.py</a>
                    <a href="https://numpy.org/" className='underline' target='_blank'>NumPy</a>
                    <a href="https://pyodide.org/en/stable/" className='underline' target='_blank'>Pyodide</a>


                </span>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://docs.soliditylang.org/en/v0.8.13/" className='underline' target='_blank'>Solidity</a>
                    <a href="https://ipfs.io/" className='underline' target='_blank'>IPFS</a>
                    <a href="https://metamask.io/" className='underline' target='_blank'>Metamask</a>
                    <a href="https://stripe.com/" className='underline' target='_blank'>Stripe</a>
                    <a href="https://aws.amazon.com/s3/" className='underline' target='_blank'>S3 Buckets </a>
                    <a href="https://aws.amazon.com/elasticloadbalancing/application-load-balancer/" className='underline' target='_blank'>Application Load Balancer</a>
                    <a href="https://www.nginx.com/" className='underline' target='_blank'>Nginx</a>
                </span>
            </div> 
        </div>

    )
}

export default Projects