import React, { FC, Suspense, useRef } from 'react'
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import * as THREE from 'three';

type Props = {
    color: string;
}
type Props1 = {
    // color: string;
    bufferRefPoints: React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined;
    bufferRefPos: React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined;
    bufferRefColor: React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined;
   
}
type Props2 = {
    bufferRefPos: React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined;
    bufferRefColor: React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined;

}

const maxParticleCount = 1000;
let particleCount = 500;
const r = 800;
const rHalf = r / 2;
let positions: Float32Array, colors: Float32Array;
let particlePositions: Float32Array;
const particlesData: any[] = [];

const effectController = {
    showDots: true,
    showLines: true,
    minDistance: 150,
    limitConnections: false,
    maxConnections: 20,
    particleCount: 500
};

const segments = maxParticleCount * maxParticleCount;

positions = new Float32Array(segments * 3);
colors = new Float32Array(segments * 3);
particlePositions = new Float32Array(maxParticleCount * 3);


export const Box: FC<Props> = ({ color }) => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] })) // useBox returns a ref to the box
    //material: {friction: 0.1}
    return (
        <mesh onClick={() => {
            api.velocity.set(0, 10, 2)
        }} ref={ref} position={[0, 2, 0]}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    );
}

export const Plane: FC = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], }))

    return (
        <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}

export const Boxer: FC = () => {

    const bufferRefPoints = useRef<React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined>(null)
    const bufferRefPos = useRef<React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined>(null)
    const bufferRefColor = useRef<React.RefObject<React.ReactNode> | React.RefCallback<THREE.BufferAttribute> | null | undefined>(null)

    for (let i = 0; i < maxParticleCount; i++) {

        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // add it to the geometry
        particlesData.push({
            velocity: new THREE.Vector3(- 1 + Math.random() * 2, - 1 + Math.random() * 2, - 1 + Math.random() * 2),
            numConnections: 0
        });

    }

    return (
        <Canvas camera={{ position: [0, 0, 100] }}>
            <OrbitControls />

            {/* <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow /> */}
           
            <group>
                {/* <boxHelper
                // position={[0, 0, 0]}
                // scale={[1, 1, 1]}
                // material={new THREE.MeshBasicMaterial({
                // color: 0x101010,
                // transparent: true,
                // blending: THREE.AdditiveBlending})}
                >
                    <mesh
         // geometry={new THREE.BoxGeometry(1, 1, 1)}
                        // material={new THREE.MeshBasicMaterial({
                        //     color: 0xffffff,
                        //     wireframe: true,
                        //     transparent: true,
                        //     // opacity: 0.5,
                        //     blending: THREE.AdditiveBlending
                        // })}
                    >
                        <boxGeometry 
                            attach="geometry"
                            args={[r, r, r]}
                        />
                        <meshStandardMaterial attach="material" 
                        color={0x101010}
                        // wireframe={true}
                        transparent={true}
                        blending={THREE.AdditiveBlending}
                        />
               
                    </mesh>
                </boxHelper> */}
                <Points bufferRefPoints={bufferRefPoints} bufferRefPos={bufferRefPos} bufferRefColor={bufferRefColor}  />
                <Lines bufferRefPos={bufferRefPos} bufferRefColor={bufferRefColor} />
            </group>
            {/* <mesh position={[0, 2, 0]}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" />
            </mesh> */}
        </Canvas>
        
       
    )
}

export const Points: FC<Props1> = ({ bufferRefPoints, bufferRefColor, bufferRefPos}) => {
    useFrame(() => {
        let vertexpos = 0;
        let colorpos = 0;
        let numConnected = 0;

        for (let i = 0; i < particleCount; i++) {

            // get the particle
            const particleData = particlesData[i];

            particlePositions[i * 3] += particleData.velocity.x;
            particlePositions[i * 3 + 1] += particleData.velocity.y;
            particlePositions[i * 3 + 2] += particleData.velocity.z;

            if (particlePositions[i * 3 + 1] < - rHalf || particlePositions[i * 3 + 1] > rHalf)
                particleData.velocity.y = - particleData.velocity.y;

            if (particlePositions[i * 3] < - rHalf || particlePositions[i * 3] > rHalf)
                particleData.velocity.x = - particleData.velocity.x;

            if (particlePositions[i * 3 + 2] < - rHalf || particlePositions[i * 3 + 2] > rHalf)
                particleData.velocity.z = - particleData.velocity.z;

            // if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections)
            //     continue;
            for (let j = i + 1; j < particleCount; j++) {

                const particleDataB = particlesData[j];
                if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections)
                    continue;

                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < effectController.minDistance) {

                    particleData.numConnections++;
                    particleDataB.numConnections++;

                    const alpha = 1.0 - dist / effectController.minDistance;

                    positions[vertexpos++] = particlePositions[i * 3];
                    positions[vertexpos++] = particlePositions[i * 3 + 1];
                    positions[vertexpos++] = particlePositions[i * 3 + 2];

                    positions[vertexpos++] = particlePositions[j * 3];
                    positions[vertexpos++] = particlePositions[j * 3 + 1];
                    positions[vertexpos++] = particlePositions[j * 3 + 2];

                    colors[colorpos++] = alpha;
                    colors[colorpos++] = alpha;
                    colors[colorpos++] = alpha;

                    colors[colorpos++] = alpha;
                    colors[colorpos++] = alpha;
                    colors[colorpos++] = alpha;

                    numConnected++;

                }

            }

            
            bufferRefPos.current.needsUpdate = true;
            bufferRefColor.current.needsUpdate = true;
            bufferRefPoints.current.needsUpdate = true;
        }
    })
    return (
        <points>
            <bufferGeometry 
            attach="geometry" 
            // drawRange={[0, particleCount]}
            // setDrawRange={
            // }
            >
                
                <bufferAttribute
                    ref={bufferRefPoints}
                    
                    // attach='position'
                    attachObject={['attributes', 'position']}
                    array={particlePositions}
                    count={particleCount}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}

                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                color={0xFFFFFF}
                size={3}
                blending={THREE.AdditiveBlending}
                sizeAttenuation={true}
                transparent={true} />

            
        </points>
    )
    
}

export const Lines: FC<Props2> = ({ bufferRefPos, bufferRefColor }) => {
    return(
        <lineSegments>
            <bufferGeometry
                attach="geometry"
                // computeBoundingSphere={() => { }}
            >
                <bufferAttribute
                    ref={bufferRefPos}
                    attachObject={['attributes', 'position']}
                    array={positions}
                    count={500}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}

                />
                <bufferAttribute
                    ref={bufferRefColor}
                    attachObject={['attributes', 'color']}
                    array={colors}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}
                />
                
            </bufferGeometry>

            <lineBasicMaterial
                vertexColors={true}
                // color={0xFFFFFF}
                blending={THREE.AdditiveBlending}
                transparent={true} />
        </lineSegments>

    )
}

export const OpenUniverse: FC = () => {
    return (
        <div className='h-full'>
            {/* <OrbitControls >
                <PerspectiveCamera
                    fov={45}
                    // aspect={window.innerWidth / window.innerHeight}
                    near={1}
                    far={4000}
                    position={[0, 0, 1750]}
                />
            </OrbitControls> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Boxer />
            </Suspense>
        </div>
        // <Canvas>
        //     <OrbitControls  />
        //     <Stars />
        //     <ambientLight intensity={0.5} />
        //     <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
        //     <Physics>
        //         <Box color={"hotpink"} />
        //         <Plane />
        //     </Physics>
        //     {/* <PerspectiveCamera fov={45} aspect={window.innerWidth/window.innerHeight} near={1} far={4000}/> */}

        // </Canvas>
        
    )
}
