import React, { FC, Suspense, useCallback, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import circleImg from '../Assets/circle.png';

type Props = {}

export const Points: FC = () => {

    const bufferRef = useRef<React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined>(null)
    const imgTex = useLoader(THREE.TextureLoader, circleImg)

    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count =100
    const sep = 3
    let positions = useMemo(() =>{
        let positions=[];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y= graph(x, z);
                positions.push(x,y,z);
            }
        }
        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 15

        const positions = bufferRef.current?.array as Float32Array[]

        // console.log(positions)
        // console.log(bufferRef)

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);

                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })


    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                ref={bufferRef}
                attachObject={['attributes','position']}
                array={positions}
                count={positions.length/3}
                itemSize={3}
                // usage={THREE.DynamicDrawUsage}
                />
            </bufferGeometry>

            <pointsMaterial attach="material"  color={0xFFFFFF} size={3} sizeAttenuation={false} transparent={true} blending={THREE.AdditiveBlending}/>
        </points>
    )
}

// colorManagement = { false}
// camera = { position: [100, 10, 0], fov: 75 }
export const AnimationCanvas: FC = () => {
    return (
        // , fov: 50
        // dpr = { [1, 2]}
        <Canvas camera={{ position: [0, 75, 0]}} >
            <mesh position={[0, 0, 0]}>
                {/* makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} */}
                <OrbitControls/>
                <Points />
            </mesh>
            
        </Canvas>
    )
}


export const SineWave: FC<Props> = (props) => {
    return (
        <div className='h-96'>
            <Suspense fallback={<div>Loading...</div>}>
                <AnimationCanvas/>
            </Suspense>


        </div>
    )
}
