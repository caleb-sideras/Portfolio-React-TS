import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Physics, usePlane, useSphere, useBox } from "@react-three/cannon"
import { FC } from "react"
// import { OrbitControls } from "@react-three/drei"
// import { BufferGeometry, Material } from "three"

export const InfiniteBounce: FC = () => {
    const length = 100;
    return (
        <Canvas shadows gl={{ stencil: false, antialias: false }} camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}>
            <color attach="background" args={["#222222"]} />
            <ambientLight intensity={1.5} />
            <Physics gravity={[0, -50, 0]} defaultContactMaterial={{ restitution: 0.5 }}>
                <group position={[0, 0, -10]}>
                    <>
                        {Array.from({ length }).map((_, i) => (
                            <InstancedSpheres key={i} />
                        ))}
                    </>
                    <Borders />
                    <InstancedSpheres />
                </group>
            </Physics>
        </Canvas>
    )
}

export const Box: FC = () => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0] })) // useBox returns a ref to the box
    return (
        <mesh onClick={() => {api.velocity.set(0, 10, 2)}} ref={ref} position={[0, 2, 0]}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={"hotpink"} />
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

export const InstancedSpheres: FC = () => {    
    const [ref2, api] = useBox(() => ({ mass: 500, position: [4 - Math.random() * 4, 10, 0, 0] }))
    
    // BufferGeometry not working with count. Might be an OpenGl issue
    return (
        <mesh onClick={() => { api.velocity.set(0, 50, 5) }} ref={ref2} position={[0, 2, 0]} >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color={"#ffffff"} wireframe={true} />
        </mesh>
    )
}

export const Borders: FC =() => {
    return (
        <>
            {/* bottom, left, right, close, far */}
            {/* @ts-ignore  */}
            <Plane2 position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            {/* @ts-ignore  */}
            <Plane2 position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            {/* @ts-ignore  */}
            <Plane2 position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
            {/* @ts-ignore  */}
            <Plane2 position={[0, 0, -1]} rotation={[0, 0, 0]} />
            {/* @ts-ignore  */}
            <Plane2 position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
        </>
    )
}

type planeProps = {
    color: number
}
export const Plane2: FC<planeProps> = ({ color: number, ...props }) =>  {
    usePlane(() => ({ ...props }))
    return null
}

export const Mouse: FC = () => {
    const { viewport } = useThree()
    const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }))
    return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 7))
}

