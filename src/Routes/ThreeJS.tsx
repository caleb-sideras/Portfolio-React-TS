import React, { FC } from 'react'
import { InfiniteBounce } from '../Components/InfiniteBounce'
import { OpenUniverse } from '../Components/OpenUniverse'
import { SineWave } from '../Components/SineWave'

type Props = {}

const ThreeJS: FC<Props> = (props) => {
    return (
        <div className='py-8 w-full max-w-xl flex flex-col gap-8'>
            <div className='justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <div className='flex flex-row items-center ml-2'>
                    <span className='font-bold text-3xl my-8 '>Physics Box</span>
                </div>

                <div className='w-full m-auto justify-center flex h-96 border-t-4'>
                    <div className='w-11/12'>
                        <InfiniteBounce />
                    </div>
                </div>
            </div>
            <div className=' justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <div className='flex flex-row items-center ml-2'>
                    <span className='font-bold text-3xl my-8 '>Open Universe</span>
                </div>

                <div className='w-full m-auto justify-center flex h-96 border-t-4'>
                    <div className='w-11/12'>
                        <OpenUniverse />
                    </div>
                </div>
                          
            </div>
            <div className='justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <div className='flex flex-row items-center ml-2'>
                    <span className='font-bold text-3xl my-8 '>Sine Wave</span>
                </div>

                <div className='w-full m-auto justify-center flex h-96 border-t-4'>
                    <div className='w-11/12'>
                        <SineWave />
                    </div>
                </div>
            </div>


        

            <span className='text-xl font-light text-left w-full py-4'>Libraries: <a href="https://threejs.org/" className='underline' target='_blank'>three.js</a> <a href="https://www.npmjs.com/package/@react-three/fiber" className='underline' target='_blank'>react-three/fiber</a> <a href="https://www.npmjs.com/package/@react-three/drei" className='underline' target='_blank'>react-three/drei</a> <a href="https://www.npmjs.com/package/@react-three/cannon" className='underline' target='_blank'>react-three/cannon</a> </span>
        </div>
    )
}

export default ThreeJS
