import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import '../index.css'

const About = () => {
    const aboutVariants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            scale: 0,
        },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start('visible')
        }
    }, [controls, inView]);

    return (
        <section className='relative w-screen h-screen mb-40 mt-20 min-h-screen sm:min-h-screen flex justify-center items-center'>
            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={aboutVariants}
                className='absolute left-[0%] mx-3 md:left-[10%] xl:left-[25%]
                md:w-1/2 xl:w-1/3 text-white py-3 glowing-shadow border rounded-lg text-center glass-background'
            >
                <h1 className='text-5xl lg:text-7xl fredoka-font'>
                    About
                    <span className='light-blue-text font-semibold'> Me</span>
                </h1>
                <p className='mt-3 mx-3 text-base font-serif'>
                    I was scripting in mIRC at the age of 12 doing automated channel bots and laying the groundwork for what would become a lifelong passion.
                    This early exposure to coding nurtured a deep interest in problem-solving and system design that I pursued throughout high school and university.
                    In high school, I further deepened my understanding of programming principles and languages during a dedicated 3-year IT Course where I got introduced to C and Pascal.
                    Later, I attended university, where I explored advanced concepts and broadened my skills in languages such as Java, and C++.
                    Although I took a hiatus from coding for some years and working in a hotel, my passion for the field remained strong.
                    I'm thrilled to have returned to my roots, leveraging my foundational knowledge and reignited passion to create robust systems and I've quickly adapted to modern development practices.
                </p>
                <h2 className='text-5xl lg:text-7xl fredoka-font mt-4'>
                    Fa
                    <span className='light-blue-text font-semibold'>
                        mili
                    </span>
                    ar wi
                    <span className='light-blue-text font-semibold'>
                        th
                    </span>
                </h2>
                <div className="mt-0 grid grid-cols-2 justify-items-center items-center gap-4">
                    {skills.map((skill, index) => (
                        <div
                            className={skillStyle}
                            key={index}
                            style={{ height: '0px'}}
                        >
                            <h3 className={skillTitleStyle}>
                                {skill.title}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h2 className='text-5xl lg:text-7xl fredoka-font mt-7'>
                            Langua
                            <span className='light-blue-text font-semibold'>
                                ges
                            </span>
                        </h2>
                        <div className="mt-8 space-y-4">
                            {languages.map((lng, index) => (
                                <div className="w-64 flex items-center" key={index}>
                                    <h3 className={skillTitleStyle}>
                                        {lng.title}
                                    </h3>
                                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                        <div
                                            className="h-full bg-indigo-500 rounded-full"
                                            style={{ width: `${lng.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

const skillStyle = "flex justify-between mt-8 mx-3 text-base font-serif";
const skillTitleStyle = "text-xl font-bold text-gray-100";

const skills = [
    {
        title: "Java",
    },
    {
        title: "React",
    },
    {
        title: "JavaScript",
    },
    {
        title: "React Native",
    },
    {
        title: "Three JS",
    },
    {
        title: "Docker",
    },
    {
        title: "CI/CD",
    },
    {
        title: "UX/UI",
    },
    {
        title: "AWS Amazon",
    },
    {
        title: "Business Management",
    },
];

const languages = [
    {
        title: "🇵🇹 Portuguese",
        level: 100,
    },
    {
        title: "🇺🇸 English",
        level: 100,
    },
    {
        title: "🇪🇸 Spanish",
        level: 80,
    },
    {
        title: "🇩🇪 German",
        level: 15,
    },
];

export default About