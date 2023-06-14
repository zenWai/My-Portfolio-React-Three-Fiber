import {useState, useEffect, useCallback, useMemo} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

const actionNames = ['Base Stack']
const Earth = () => {

    const [scale, setScale] = useState(0.7)

    const memoizedEarth = useMemo(() => {
        return useGLTF('./earth/scene.gltf')
    })

    const animations = useAnimations(
        memoizedEarth.animations,
        memoizedEarth.scene
    )

    const onScroll = useCallback(() => {
        const percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
        const newScale = 0.7 + 3 * percentage
        setScale(newScale)
    }, [])

    useEffect(() => {
        actionNames.forEach((actionName) => {
            const action = animations.actions[actionName]
            action.play()
        })

        window.addEventListener('scroll', onScroll)

        return() => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [animations, onScroll])

    return (
        <mesh>
            <primitive object={memoizedEarth.scene} scale={scale}/>
        </mesh>
    )
}

export default Earth
