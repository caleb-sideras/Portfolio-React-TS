import React, { FC, useEffect, useState } from 'react'
import { AudioAdd } from './AudioAdd'
import { Audio } from "../Models/AudioModel"
import { AudioItem } from './AudioItem'
import { AudioItems } from './AudioItems'
import { AudioPlay } from './AudioPlay'
import { AudioControls } from './AudioControls'

type Props={}

export const AudioWrapper: FC<Props> = (props) => {
    const [audio, setAudio] = useState<File | null>()
    const [audioList, setAudioList] = useState<Audio[]>([])
    const [add, setAdd] = useState<boolean>(true)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [activeAudio, setActiveAudio] = useState<Audio>()
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const handleAddAudio = (audio: File | null | undefined ) => {
        if (audio && audio.type=="audio/mpeg") {
            console.log(audio)
            let tempAudio: Audio = {
                id: Date.now(), audio: audio, pitch: 0, name: audio.name, distortion: 0, reverb: 0,
                feedback: 0, delay: 0
            }
            setAudioList([...audioList, tempAudio])
            setActiveAudio(tempAudio)
            setAdd(!add)
            setAudio(null)
            setIsActive(true)
            console.log("AudioList Addition + Audio set NULL")
        }
        else{
            alert("Please upload an .mp3 file!")
        }
    }
    useEffect(() => {
        if (audio){
            handleAddAudio(audio)
        }
    }, [audio])

    // console.log(audio)
    // console.log(audioList)
    // console.log(isActive)
    // console.log(add)
    // console.log(isPlay)
    return (
        <div className='max-w-xl h-96 w-full justify-center items-center flex flex-col border-4'>
            {add ? (
                <>
                    <AudioAdd audio={audio} setAudio={setAudio} />
                    <span>Upload audio file</span>
                </>
            ):(
                isActive ? (
                    <div className='flex flex-col h-full w-full justify-between'>
                        <AudioItems audioList={audioList} setAudioList={setAudioList} />
                        <AudioControls isPlay={isPlay} activeAudio={activeAudio}/>
                        <AudioPlay isPlay={isPlay} setIsPlay={setIsPlay}/>
                    </div>
                ):(
                    <div></div>
                )
            )}      
        </div>
    )
}
