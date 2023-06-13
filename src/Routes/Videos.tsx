import React from 'react'
import VideoPlayer from '../Components/VideoPlayer'

const Videos: React.FC = () => {
    return (
        <div className='y-8 flex flex-col gap-8 py-8 justify-center '>
            <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in px-4 border-4'>
                <span className='font-bold text-center text-3xl my-8'>Detailed explanations of my projects</span>
            </div>
            <VideoPlayer ID={'h95Pd2rcXvA'} />
            <VideoPlayer ID={'5Cp4Hsy1cpI'} />
            <VideoPlayer ID={'kVaLo40P9Xc'} />
        </div>
    )
}

export default Videos
