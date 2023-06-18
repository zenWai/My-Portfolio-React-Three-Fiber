import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import '../index.css'


const Hero = ({ isLoaded }) => {
    //motion.h1
    const h1variants = {
        visible: {
            opacity:1,
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.5,
                stiffness: 100,
                duration: 1,
                delay: 1.5,
            }
        },
        hidden: {
            opacity: 0,
            scale: 0,
        },
    };

    const h2variants = {
        visible: {
            opacity:1,
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.5,
                stiffness: 100,
                duration: 0.8,
                delay: 2.3,
            }
        },
        hidden: {
            opacity: 0,
            scale: 0,
        },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    //starts hidden
    useEffect(() => {
        if(isLoaded && inView) {
            controls.start('visible')
        }
    }, [controls, inView, isLoaded])

    return (
        <section className='w-screen h-screen mx-auto'>
            <div className='absolute left-[5%] top-[5%] xl:left-[14%] xl:top-[14%] mx-auto fredoka-font text-white'>
                <motion.h1
                    ref={ref}
                    variants={h1variants}
                    className='text-5xl lg:text-7xl'
                    animate={controls}
                    initial='hidden'>

                    Hello, i'm{' '}
                    <span className='hover-text-glow light-blue-text font-semibold'>
                        Fernando{' '}
                    </span> {' '}

                </motion.h1>
                <motion.h2
                    ref={ref}
                    variants={h2variants}
                    className='mt-8 text-3xl w-2/3 text-center'
                    animate={controls}
                    initial='hidden'>

                    a <span className='hover-text-glow light-blue-text font-semibold'>
                        Developer{' '}
                    </span> {' '}
                    Tech Enthusiast and <span className='hover-text-glow light-blue-text font-semibold'>
                        Coder{' '}
                    </span> {' '}
                </motion.h2>
            </div>
            {/*arrows*/}
            <div className='absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]'>
                <div className='slide-bottom'>
                    <div className='down-arrow'></div>
                    <div className='down-arrow'></div>
                    <div className='down-arrow'></div>
                </div>
            </div>

        </section>
    );
};

export default Hero