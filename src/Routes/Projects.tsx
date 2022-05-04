import React, { FC } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaVuejs } from 'react-icons/fa'
import { SiAmazonaws, SiCplusplus, SiDart, SiDjango, SiDotnet, SiFlutter, SiMysql, SiPython, SiWebpack } from 'react-icons/si'
import { CgArrowTopRight } from 'react-icons/cg'

type Props = {}

const Projects: React.FC = () => {
    return (

        <div className='py-8 flex flex-col gap-8'>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
            <a href="https://genera.link" target='_blank'>
                <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                    <span className='font-bold text-3xl my-8 '>Genera</span>
                    <CgArrowTopRight />
                </div>
            </a>

            <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>A web3 platform that enables artists to prototype, create, mint and sell NFT collections from the Ethereum or Polygon Blockchains.</span>
            <span className='text-xl font-bold text-center w-full py-4'>Roles</span>
            <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>Co-Founder, Full Stack Developer, Web3/Solidity Developer, UI/UX designer.</span>
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
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/Stagger-Flutter-App" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>Stagger</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>Flutter app that allows for personalization and real-time updates for cryptocurrency tracking. Uses Flutter BLoC architecture.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <SiFlutter className='button-icon-left' />
                        +
                        <SiDart className='button-icon-left' />
                    </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://www.coingecko.com/en/api" className='underline' target='_blank'>CoinGecko</a>
                    <a href="https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md" className='underline' target='_blank'>Binance</a>
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/Cryptocurrency-Spot-Trading-Algorithm" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>
                            Cryptocurrency Trading</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>Automated buying and selling of any spot or future cryptocurrency pair on an exchange based on user provided parameters.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiPython className='button-icon-left' />
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://docs.ftx.com/#overview" className='underline' target='_blank'>FTX</a>
                    <a href="https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md" className='underline' target='_blank'>Binance</a>
                    <a href="https://docs.cloud.coinbase.com/exchange/docs/welcome" className='underline' target='_blank'>Coinbase Pro</a>
                    <a href="https://phemex.com/user-guides/api-overview" className='underline' target='_blank'>Phemex</a>
                    
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/ClientServerChatApp.git" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>
                            Client/Server Chat App</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>Multi-Client/Server messaging application utilizing the Windows Sockets (WinSock) API. Clients can also issue commands ($getlog, $getlist etc) with the server logging both client commands and messages.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiCplusplus className='button-icon-left' />
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://docs.microsoft.com/en-us/windows/win32/winsock/windows-sockets-start-page-2" className='underline' target='_blank'>WinSock API</a>
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/Saiph-Space-Game.git" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>
                            Saiph Space Game</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-left w-full pb-4 text-adjust-center'>The objective of the game is to survive while defeating all opponents. Enemy and level information is data driven via xml files. Once all levels are completed the game will restart at level zero.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiDotnet className='button-icon-left'/>
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap'>
                    Technologies/APIs:
                    <a href="https://docs.microsoft.com/en-us/dotnet/" className='underline' target='_blank'>.NET</a>
                </span>
            </div>
        </div>

    )
}

export default Projects