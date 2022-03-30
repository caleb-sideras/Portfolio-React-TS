import React, { FC } from 'react'
import { Audio } from "../Models/AudioModel"

type Props = {
    name: string
    pitch: number
    audio: File
    audioList: Audio[],
    setAudioList: React.Dispatch<React.SetStateAction<Audio[]>>
}

export const AudioItem: FC<Props> = ({name, pitch, audio, audioList, setAudioList}) => {
    return (
        <div className='text-center'>
            {name}
        </div>
    )
}
