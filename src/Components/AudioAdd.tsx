import React, { FC, useRef, useState } from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'
type Props = {
    audio: File | null | undefined
    setAudio: React.Dispatch<React.SetStateAction<File | null | undefined>>
}

export const AudioAdd: FC<Props> = ({ audio, setAudio }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const pressInput = () =>{
        inputRef.current?.click()
    }

    return (
        <div>
            <AiOutlineFileAdd className='button-icon button-icon-active' onClick={pressInput}/>
            <input
                className='hidden'
                type="file" 
                name="mp3" 
                accept='audio/mp3'
                onChange={(e) => setAudio(e.target.files[0])} 
                ref={inputRef}
            />
        </div>
        
    )
}
