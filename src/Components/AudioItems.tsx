import React, { FC } from 'react'
import { Audio } from "../Models/AudioModel"
import { AudioItem } from './AudioItem'

type Props = {
    audioList: Audio[],
    setAudioList: React.Dispatch<React.SetStateAction<Audio[]>>
}

export const AudioItems: FC<Props> = ({audioList, setAudioList}) => {
    return (
        <div>
            {audioList.map((audio) => (
                <AudioItem name={audio.name} key={audio.id} pitch={audio.pitch} audio={audio.audio} setAudioList={setAudioList} audioList={audioList}/>
            ))}
        </div>
        
    )
}
