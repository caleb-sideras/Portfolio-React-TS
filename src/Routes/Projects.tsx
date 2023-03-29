import React, { FC } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaVuejs } from 'react-icons/fa'
import { SiAmazonaws, SiCelery, SiCplusplus, SiDart, SiDjango, SiDocker, SiDotnet, SiFastapi, SiFlutter, SiMicrosoftbing, SiMysql, SiOpenai, SiPostgresql, SiPython, SiPytorch, SiReact, SiRedis, SiTypescript, SiWebpack } from 'react-icons/si'
import { CgArrowTopRight } from 'react-icons/cg'

type Props = {}

const Projects: React.FC = () => {
    return (

        <div className='py-8 flex flex-col gap-8'>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/TweetailyzeV1" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>Tweetailyze</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center '>An API that provides Twitter account summarization through embedding/clustering of tweets, and then performing sentiment analysis and topic modeling.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'> 
                        <SiDocker className='button-icon-left' />
                        +
                        <SiFastapi className='button-icon-left' />
                        +
                        <SiPostgresql className='button-icon-left' />
                        +
                        <SiCelery className='button-icon-left' />
                        +
                        <SiRedis className='button-icon-left' />
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-2 mt-4'>
                        <SiPytorch className='button-icon-left' />
                        +
                        <SiOpenai className='button-icon-left' />
                    </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
                    <a href="https://github.com/cjhutto/vaderSentiment" className='underline' target='_blank'>VADER-Sentiment-Analysis</a>
                    <a href="https://huggingface.co/bert-base-multilingual-cased" className='underline' target='_blank'>BBERT multilingual base model</a>
                    <a href="https://www.nltk.org/" className='underline' target='_blank'>Natural Language Toolkit</a>
                    <a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html" className='underline' target='_blank'>Non-Negative Matrix Factorization</a>
                    <a href="https://www.pgadmin.org/" className='underline' target='_blank'>pgAdmin</a>
                    <a href="https://flower.readthedocs.io/en/latest/" className='underline' target='_blank'>Flower</a>
                    <a href="https://www.sqlalchemy.org/" className='underline' target='_blank'>SQLAlchemy</a>
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://aipeoplepedia.com/" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>People Pedia</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center '>AI powered search that summarizes and visualizes information for anyone who has data on the internet.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <SiReact className='button-icon-left' />
                        +
                        <SiTypescript className='button-icon-left' />
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-2 mt-2'>
                        <SiOpenai className='button-icon-left' />
                        +
                        <SiMicrosoftbing className='button-icon-left' />
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-2 mt-4'>
                        <SiDjango className='button-icon-left' />
                    </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
                    <a href="https://platform.openai.com/docs/api-reference/completions" className='underline' target='_blank'>OpenAI GPT-3.5</a>
                    <a href="https://www.microsoft.com/en-us/bing/apis/bing-web-search-api" className='underline' target='_blank'>Bing Web Search</a>
                </span>
            </div>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <a href="https://github.com/caleb-sideras/Stagger-Flutter-App" target='_blank'>
                    <div className='flex flex-row items-center ml-2 hover:text-accent transition-all'>
                        <span className='font-bold text-3xl my-8'>Stagger</span>
                        <CgArrowTopRight />
                    </div>
                </a>
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center '>Flutter app that allows for personalization and real-time updates for cryptocurrency tracking. Uses Flutter BLoC architecture.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                    <div className='flex flex-row flex-wrap items-center gap-2'>
                        <SiFlutter className='button-icon-left' />
                        +
                        <SiDart className='button-icon-left' />
                    </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
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
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center'>Automated buying and selling of any spot or future cryptocurrency pair on an exchange based on user provided parameters.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiPython className='button-icon-left' />
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
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
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center'>Multi-Client/Server messaging application utilizing the Windows Sockets (WinSock) API. Clients can also issue commands ($getlog, $getlist etc) with the server logging both client commands and messages.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiCplusplus className='button-icon-left' />
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
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
                <span className='text-xl font-light text-center w-full pb-4 text-adjust-center'>The objective of the game is to survive while defeating all opponents. Enemy and level information is data driven via xml files. Once all levels are completed the game will restart at level zero.</span>
                <span className='text-xl font-bold text-center w-full py-4'>Tech Stack</span>
                <div className='flex flex-row flex-wrap items-center gap-2'>
                    <SiDotnet className='button-icon-left'/>
                </div>
                <span className='text-xl font-light text-left w-full py-4 gap-2 flex flex-wrap justify-center'>
                    Other:
                    <a href="https://docs.microsoft.com/en-us/dotnet/" className='underline' target='_blank'>.NET</a>
                </span>
            </div>
        </div>

    )
}

export default Projects