import React, { FC } from 'react'
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai'

type Props = {
    isPlay: boolean;
    setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AudioPlay: FC<Props> = ({isPlay, setIsPlay}) => {
    return (
        <div className='border-t-4 py-4' onClick={() => { setIsPlay(!isPlay) }}>
            {isPlay?(
                <AiOutlinePauseCircle className='button-icon button-icon-active' />
            ):(
                    <AiOutlinePlayCircle className='button-icon button-icon-active' />
            )}
        </div>
    )
}
