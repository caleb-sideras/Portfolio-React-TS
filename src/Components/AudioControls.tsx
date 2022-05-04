import React, { FC, useEffect, useRef, useState } from 'react'
import { Audio } from "../Models/AudioModel"
import * as Tone from 'tone'
import Sketch from 'react-p5'

type Props = {
    isPlay: boolean;
    activeAudio: Audio | undefined;
}

export const AudioControls: FC<Props> = ({isPlay, activeAudio}) => {


    // Insane refactor to all const and component based sliders!!!


    // Tone js init
    // const [tone, setTone] = useState<typeof Tone>(Tone)
    const [player, setplayer] = useState<Tone.Player>(new Tone.Player({ url: URL.createObjectURL(activeAudio?.audio as Blob), loop: true}))
    const [shifter, setShifter] = useState<Tone.PitchShift>(new Tone.PitchShift().toDestination())
    const [reverber, setReverber] = useState<Tone.Reverb>(new Tone.Reverb().toDestination())
    const [distortioner, setDistortioner] = useState<Tone.Distortion>(new Tone.Distortion().toDestination())
    // const [feedbackDelayer, setFeedbackDelayer] = useState<Tone.FeedbackDelay>(new Tone.FeedbackDelay().toDestination())
    const [frequencyShifter, setFrequencyShifter] = useState<Tone.FrequencyShifter>(new Tone.FrequencyShifter().toDestination())
    const [analyser, setAnalyser] = useState <Tone.Analyser>(new Tone.Analyser('waveform', 128).toDestination())

    const [pitch, setPitch] = useState<number | string>(activeAudio?.pitch as number)
    const [reverb, setReverb] = useState<number | string>(activeAudio?.reverb as number)
    const [distortion, setDistortion] = useState<number | string>(activeAudio?.distortion as number)
    const [isDistortConnect, setIsDistortConnect] = useState<boolean>(false)
    const [feedback, setFeedback] = useState<number | string>(activeAudio?.distortion as number)
    const [delay, setDelay] = useState<number | string>(activeAudio?.distortion as number)
    const [p5Object, setp5Object] = useState<any>(undefined)
    
    
    const pitchValueRef = useRef<HTMLInputElement | null>(null)
    const pitchSliderRef = useRef<HTMLInputElement | null>(null)
    const distortionValueRef = useRef<HTMLInputElement | null>(null)
    const distortionSliderRef = useRef<HTMLInputElement | null>(null)
    // const feedbackValueRef = useRef<HTMLInputElement | null>(null)
    // const delayValueRef = useRef<HTMLInputElement | null>(null)
    const reverbValueRef = useRef<HTMLInputElement | null>(null)
    const reverbSliderRef = useRef<HTMLInputElement | null>(null)
    const frequencyValueRef = useRef<HTMLInputElement | null>(null)
    const controlRef = useRef<HTMLDivElement | null>(null)


    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const isMounted = useRef<boolean>()
    // shifter init
    shifter.wet.value = 1
    
    // const pitchShift = new Tone.PitchShift().toDestination();
    // const osc = new Tone.Oscillator().connect(pitchShift).start().toDestination();
    // pitchShift.pitch = -12; // down one octave
    // pitchShift.pitch = 7; // up a fifth
    

    const playSound = ()=> {
        isLoaded ? (
            player.start()
        ): (
            Tone.loaded().then(() => {
                setIsLoaded(true);
                player.start();
            })
        )   
    }

    function pause(){
        player.stop()
    }

    useEffect(() => {
        isPlay ? playSound() : pause()
    }, [isPlay])


    // useEffect(() => {
    //     // shifter.pitch = pitch as number
    // }, [shifter])

    useEffect(() => {
        distortioner.distortion = distortion as number
    }, [distortion])

    useEffect(() => {
        if (controlRef.current) {
            if(p5Object){
                // p5Object.setVolume(0.1)
                p5Object.resizeCanvas(controlRef.current?.clientWidth, controlRef.current?.clientHeight as number / 2)
            }
        }
    }, [p5Object]);

    //not working
    // useEffect(() => {
    //     if (isMounted.current){
    //         // setFeedbackDelayer(new Tone.FeedbackDelay(feedback as number, delay as number).toDestination())
    //         // player.connect(feedbackDelayer);
    //     }
        
    // }, [feedback, delay])

    useEffect(() => {
        isMounted.current = true
        player.connect(shifter)
        player.connect(reverber);
        player.connect(distortioner);
        player.connect(reverber)
        player.connect(analyser);
        // player.connect(frequencyShifter)
        // player.connect(feedbackDelayer);

        return () => {
            isMounted.current = false
        }

    }, [])
    

    const handleOnChangePitch = (e: React.ChangeEvent<HTMLInputElement>) => { 
        if (pitchValueRef.current?.value != null){
            pitchValueRef.current.value = e.target.value
        }
    }

    const handleOnChangeDistortion = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (distortionValueRef.current?.value != null) {
            distortionValueRef.current.value = e.target.value
        }
    }

    const handleOnChangeReverb = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (reverbValueRef.current?.value != null) {
            reverbValueRef.current.value = e.target.value
        }
    }
    const handleOnChangeFrequency = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (frequencyValueRef.current?.value != null) {
            frequencyValueRef.current.value = e.target.value
        }
    }

    // const handleOnChangeFeedback = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (feedbackValueRef.current?.value != null) {
    //         feedbackValueRef.current.value = e.target.value
    //     }
    // }
    // const handleOnChangeDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (delayValueRef.current?.value != null) {
    //         delayValueRef.current.value = e.target.value
    //     }
    // }

    // const handleFeedback = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
    //     console.log(delayValueRef.current?.value)
    //     console.log(e.target.value)
    //     if (e.target.value != null) {
    //         //fix this logic then try filter with drop down ffs
    //         console.log(isDistortConnect)
    //         console.log("1")
    //         if (isDistortConnect) {
                
    //             // setFeedbackDelayer(new Tone.FeedbackDelay(0, parseFloat(delayValueRef.current?.value as string)).toDestination())
    //             feedbackDelayer.disconnect(player)
    //             shifter.disconnect(player)
    //             setIsDistortConnect(false)
    //             console.log("2")
                
    //         }
    //         if (!isDistortConnect && e.target.value != "0"){
    //             setFeedbackDelayer(new Tone.FeedbackDelay(e.target.value, parseFloat(delayValueRef.current?.value as string)).toDestination())
    //             player.connect(feedbackDelayer);
    //             setIsDistortConnect(true)
    //             console.log("3")
    //         }

            
    //     }
    // }
    // const handleDelay = (e: React.ChangeEvent<HTMLInputElement>) => {

    //     setFeedbackDelayer(new Tone.FeedbackDelay(feedback as number, delay as number).toDestination())
    //     player.connect(feedbackDelayer);
    // }



    //IDEA use refs until you save the state, could elimate those glitching issues.
    // issue when delay set to zero, king :)

    const setup = (p5:any, canvasParentRef:any) => {
        setp5Object(p5)
        p5.createCanvas(0,132).parent(canvasParentRef)
       
    }

    const resize = (p5: any) => {
        p5.resizeCanvas(controlRef.current?.clientWidth, controlRef.current?.clientHeight as number /2)
    }

    const draw = (p5:any) => {
        p5.background(34, 34, 34); //150
        const dim = Math.min(controlRef.current?.clientWidth as number, controlRef.current?.clientHeight as number / 2);
        p5.strokeWeight(dim * 0.01); //0.0025
        p5.stroke(255); //#ffffff
        p5.noFill();

        if (isPlay) {
            const values: Float32Array | Float32Array[] = analyser.getValue();

            p5.beginShape();
            for (let i = 0; i < values.length; i++) {
                const amplitude: number  = values[i] as number;
                const x = p5.map(i, 0, values.length - 1, 0, controlRef.current?.clientWidth as number);
                const y = controlRef.current?.clientHeight as number / 4 + amplitude * (controlRef.current?.clientHeight as number / 2);
                // Place vertex
                p5.vertex(x, y);
            }
            p5.endShape();
        }else{
            p5.clear();
        }
    }

    return (
        <div className='flex flex-col w-full px-4'>
            <div className='flex flex-col' ref={controlRef}>

                <div className='flex flex-col'>
                    <div>
                        <span>Pitch: </span>
                        <output ref={pitchValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input ref={pitchSliderRef} className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={12} min={-12} onPointerUp={() => shifter.pitch = parseInt(pitchSliderRef.current?.value as string)} step={1} onChange={handleOnChangePitch} />
                </div>

                <div className='flex flex-col'>
                    <div>
                        <span>Distortion: </span>
                        <output ref={distortionValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input ref={distortionSliderRef} className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={1} min={0} onPointerUp={() => distortioner.distortion = parseFloat(distortionSliderRef.current?.value as string)} step={0.05} onChange={handleOnChangeDistortion} />
                </div>

                <div className='flex flex-col'>
                    <div>
                        <span>Reverb: </span>
                        <output ref={reverbValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input ref={reverbSliderRef} className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0.001} max={100} min={0.001} onPointerUp={() => reverber.decay = parseFloat(reverbSliderRef.current?.value as string)} onChange={handleOnChangeReverb} />
                </div>
                <Sketch className="m-auto" setup={setup} draw={draw} windowResized={resize} />

                {/* <div className='flex flex-col'>
                    <div>
                        <span>Frequency: </span>
                        <output ref={frequencyValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={100} min={-100} onMouseOut={(e) => frequencyShifter.frequency = parseFloat(e.target.value)} onChange={handleOnChangeFrequency} />
                </div> */}


                {/* <div className='flex flex-col'>
                    <div>
                        <span>Feedback: </span>
                        <output ref={feedbackValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={1} min={0} onMouseUp={(e) => handleFeedback(e)} step={0.05} onChange={handleOnChangeFeedback} />
                </div>

                <div className='flex flex-col'>
                    <div>
                        <span>Delay: </span>
                        <output ref={delayValueRef} className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={1} min={0} onMouseUp={(e) => {}} step={0.05} onChange={handleOnChangeDelay} />
                </div> */}

                {/* <div className='flex flex-col'>
                    <div>
                        <span>Reverb: </span>
                        <output  className='w-8 text-center text-accent font-bold' id="slider_value" >0</output>
                    </div>
                    <input className='appearance-none w-full h-1 bg-white rounded outline-none slider-thumb my-2' type="range" name="" id="" defaultValue={0} max={0} min={12} onMouseUp={(e) => setPitch(parseInt(e.target.value))} step={1} onChange={handleOnChangePitch} />
                </div> */}
                

                
                {/* sliderRef.current?.value as string ????*/}
                {/* <input className="flex bg-color_primary outline-none w-12 text-left" type="text" value={pitch} onChange={(e) => { if (e.target.value) { setPitch(parseInt(e.target.value)) } }} readOnly/> */}
                {/* <Slider defaultValue={0} aria-label="Default" max={12} min={-12} valueLabelDisplay="auto" onChangeCommitted={(_, v) => setPitch(v as number)}/> */}
            </div>

            
        </div>
    )
}
