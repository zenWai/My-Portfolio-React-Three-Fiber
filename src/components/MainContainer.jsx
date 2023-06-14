import '../index.css'
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./canvas/ReactLogo.jsx";
import {Loader} from "@react-three/drei";
import StarsAnimated from "./StarsAnimated.jsx";
import Hero from "./Hero.jsx";
import {Suspense} from "react";
import About from "./About.jsx";
import projects from "./Projects.jsx";
import Projects from "./Projects.jsx";

const MainContainer = () => {
    const bgColor= ({gl}) => {
        gl.setClearColor('#000000', 1)
    }
  return (
      <>
          <Canvas
              id='canvas'
              style={{position: 'fixed'}}
              camera={{position: [20, 3, 5], fov: 25 }}
              onCreated={bgColor}
          >

              <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
              <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
              <Suspense fallback={null}>
                  <StarsAnimated />
                  <ReactLogo />
              </Suspense>

          </Canvas>

          <Loader />
          <Hero />
          <About />
          <Projects />
      </>
  )
}

export default MainContainer
