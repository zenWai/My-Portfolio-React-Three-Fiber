import '../index.css'
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./canvas/ReactLogo.jsx";
import {Loader} from "@react-three/drei";
import StarsAnimated from "./StarsAnimated.jsx";
import Hero from "./Hero.jsx";
import {Suspense, useRef, useState} from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Earth from "./canvas/Earth.jsx";


const MainContainer = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const canvasRef = useRef()

    const handleCreated = () => {
        setIsLoaded(true);
    }

    const bgColor = ({ gl }) => {
        gl.setClearColor('#000000', 1)
    }
    return (
        <>
            <Canvas
                id='canvas'
                style={{ position: 'fixed' }}
                camera={{ position: [20, 3, 5], fov: 25 }}
                onCreated={handleCreated}
            >
                <color attach="background" args={['#9b96dd']}/>

                <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]}/>
                <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)}/>
                <Suspense fallback={null}>
                    <StarsAnimated/>
                    <ReactLogo/>
                    <Earth/>
                </Suspense>

            </Canvas>

            <Loader/>
            <div className="flex flex-col">
                <Hero isLoaded={isLoaded}/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}

export default MainContainer
