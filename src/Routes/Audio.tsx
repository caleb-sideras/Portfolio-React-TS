import { FC } from 'react'
import { AudioWrapper } from '../Components/AudioWrapper'

const Audio: React.FC = () => {

  return (
    <div className='max-w-xl w-full justify-center items-center flex flex-col animate-fade-in'>
      <span className='font-bold text-3xl my-8'>Audio Manipulator</span>
      <AudioWrapper/>
      <span className='text-xl font-light text-left w-full py-4'>Libraries: <a href="https://p5js.org/" className='underline' target='_blank'>p5.js</a> <a href="https://tonejs.github.io/" className='underline' target='_blank'>tone.js</a> </span>
    </div>
  )
}


export default Audio