import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

import springBootSlider from '../assets/background_FullStac.png'
import recommenderMovieSystemSlider from '../assets/RecommenderMovieSystem.png'
import restaurantOrderAppSlider from '../assets/RestaurantOrderApp.png'
import vigenereCipherSlider from '../assets/VigenereCipher.png'
import babyNamesSlider from '../assets/babyNames.jpg'
import weatherDataSlider from '../assets/sky_zeros_ones_falling.png'
import demoIcon from '../assets/demo.png'

const spanTextEffect = 'light-blue-text font-semibold';
const slides = [
    {
        id: 0,
        imageSrc: springBootSlider,
        projectName: 'Spring Boot React FullStack',
        projectLink: 'https://www.full-stack-react.awsfernandopresa.com/dashboard/customers',
        projectDescription: () => (
            <>
                One of the main highlights of this project is the significant emphasis on
                <span className={spanTextEffect}> DevOps </span>ensuring
                <span className={spanTextEffect}> seamless integration </span>,
                <span className={spanTextEffect}> testing </span>, and
                <span className={spanTextEffect}> AWS deployment </span>.
                This full-stack application is a customer dashboard where users can
                register, login, upload profile pictures, manage customer information,
                and access a small section of dashboard insights with customer info charts.
                The application was built using a variety of technologies and
                <span className={spanTextEffect}> best practices and security </span>
                to ensure
                <span className={spanTextEffect}> high quality, maintainability, and scalability </span>.
            </>
        ),
        githubLink: 'https://github.com/zenWai/Java-SpringBoot-React-FullStack',
    },
    {
        id: 1,
        imageSrc: recommenderMovieSystemSlider,
        projectName: 'Movie Recommendation System',
        projectLink: 'https://www.dukelearntoprogram.com//capstone/recommender.php?id=MkKAemh4NfGlOJ',
        projectDescription:() => (
            <>
                This project is able to answer questions about the data, including which items should be recommended to a user based on their ratings of several movies.
                Given input files on users ratings and movie titles, it can: <br/>
                <ul style={{textAlign: "left"}}>
                    <li><span className={spanTextEffect}>1. </span>Read in and parse data into lists and maps;</li>
                    <li><span className={spanTextEffect}>2. </span>Calculate average ratings;</li>
                    <li><span className={spanTextEffect}>3. </span>Calculate how similar a given rater is to another user based on ratings; and</li>
                    <li><span className={spanTextEffect}>4. </span>Recommend movies to a given user based on ratings.</li>
                    <li><span className={spanTextEffect}>5. </span>Display recommended movies for a given user on a webpage.</li>
                </ul>
            </>
        ),
        githubLink: 'https://github.com/zenWai/Recommendation-System',
    },
    {
        id: 2,
        imageSrc: restaurantOrderAppSlider,
        projectName: 'Restaurant Order App React Native',
        projectLink: 'none',
        projectDescription:() => (
            <>
                This project is part of a capstone on React Native Specialization by Meta, it is a Mobile App for a Restaurant to enable users to setup an account and make orders:
                <ul style={{textAlign: "left"}}>
                    <li><span className={spanTextEffect}>- </span>Apply UX and UI principles to guide creation of a wireframe and prototype for the app</li>
                    <li><span className={spanTextEffect}>- </span>Develop screens for a React Native app featuring various components and interactive elements</li>
                    <li><span className={spanTextEffect}>- </span>Set up a navigation flow to enable users to move between screens in the app</li>
                    <li><span className={spanTextEffect}>- </span>Fetch data from a remote server and store it in a database, and then render it in the app</li>
                    <li><span className={spanTextEffect}>- </span>Implement data filtering functionality to enable users to customize information</li>
                </ul>
            </>
        ),
        githubLink: 'https://github.com/zenWai/Restaurant-Order-App',
    },
    {
        id: 3,
        imageSrc: vigenereCipherSlider,
        projectName: 'Vigenere Cipher Encrypt and Cracker',
        projectLink: 'none',
        projectDescription:() => (
            <>
                A Java backend project capable of encrypting and decrypting text encrypted with the Vigenere cipher.
                Using a blend of statistical and dictionary-based techniques, this project supports multiple languages,
                including Danish, Dutch, English, French, German, Italian, Portuguese, and Spanish.
                <ul style={{textAlign: "left"}}>
                    <li><span className={spanTextEffect}>Vigenere Cipher Encryption: </span>The program allows you to provide a message and a keyword to encrypt your message.</li>
                    <li><span className={spanTextEffect}>Vigenere Cipher Decryption: </span>Given an encrypted message and the original keyword, the program can decrypt it.</li>
                    <li><span className={spanTextEffect}>Brute Force Decryption: </span>The program attempts all possible keywords and evaluates each resulting decryption to find the most likely original message.</li>
                </ul>
            </>
        ),
        githubLink: 'https://github.com/zenWai/VigenereCipher---Encrypt-and-Cracker',
    },
    {
        id: 4,
        imageSrc: babyNamesSlider,
        projectName: 'Baby Names Data CSV Parsing and Analysis',
        projectLink: 'none',
        projectDescription:() => (
            <>
                The project offers a range of functionalities to provide insights into various aspects of baby names data.
                <br/>
                <ul style={{textAlign: "left"}}>
                    <li><span className={spanTextEffect}>1. Total Births </span>Calculates the total number of births, as well as the total number of boys, girls, boy names, and girl names in a selected CSV file or files.</li>
                    <li><span className={spanTextEffect}>2. Rank of a Baby Name </span>Given a year and gender calculate the popularity rank of a baby name</li>
                    <li><span className={spanTextEffect}>3. Name Associated with a Rank </span></li>
                    <li><span className={spanTextEffect}>4. Year with the Highest Rank for a Given Name </span></li>
                    <li><span className={spanTextEffect}>5. Average Rank of a Name </span></li>
                    <li><span className={spanTextEffect}>6. Total Number of Births Ranked Higher </span>Calculates the total number of births for names ranked more popular than a given name.</li>
                </ul>
            </>
        ),
        githubLink: 'https://github.com/zenWai/Baby-Names-Data-CSV-Parsing-and-Analysis',
    },
    {
        id: 5,
        imageSrc: weatherDataSlider,
        projectName: 'Weather Data CSV Parsing and Analysis',
        projectLink: 'none',
        projectDescription:() => (
            <>
                This is a Java project designed to parse and analyze weather data from CSV files. The program comprises multiple components, including a parser, analyzer, and reporter.
                <br/>
                The Main class employs the WeatherDataParser and WeatherAnalyzer to parse the weather data, analyze it, and report the results.
                <br/>
                It calculates various metrics such as the hottest and coldest temperatures, highest and lowest humidity levels, the average temperature, and the average temperature when humidity is above a specified threshold
            </>
        ),
        githubLink: 'https://github.com/zenWai/Weather-Data-CSV-Parsing-and-Analysis',
    },
]

const Projects = () => {
    const Card = ({slide}) => {
        return (
            <div className='border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col'>
                <div className='w-full'>
                    <a href={slide.projectLink} className='block w-full h-full'>
                        <img
                            src={slide.imageSrc}
                            alt={slide.projectName}
                            style={{ height: "370px" }}
                            className='w-full h-full cursor-pointer flex-shrink'
                        />
                    </a>
                </div>
                <div className='text-white flex flex-col justify-start items-center h-[40%] mx-1 my-1'>
                    <h2 className='text-center font-bold my-3'> {slide.projectName}</h2>
                    <p className='text-center mb-5'>{slide.projectDescription()}</p>
                    <div className='flex justify-center mb-1'>
                        {slide.projectLink && slide.projectLink !== 'none' && (
                            <a href={slide.projectLink} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={demoIcon}
                                    alt='project link'
                                    className='w-10 h-10 hover-glowing-shadow-and-scale rounded-full'
                                />
                            </a>
                        )}
                        <a href={slide.githubLink} target="_blank" rel="noopener noreferrer">
                            <img
                                src='https://img.icons8.com/material-outlined/24/61dbfb/github.png'
                                alt='github link'
                                className='w-10 h-10 hover-glowing-shadow-and-scale rounded-full ml-6'
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className='relative w-screen h-screen mt-40 flex justify-center items-center'>
            <div className='w-full h-screen flex flex-col justify-center items-center text-white z-10'>
                <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
                    Portfolio
                    <span className={spanTextEffect}> Pro</span>
                    jects
                </h1>
                <p className='mt-5'>Swipe or drag the items</p>
                <div className='w-full h-screen sm:w-3/4 lg:w-1/2 xl:w-1/3 my-10 '>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        // Responsive breakpoints
                        breakpoints={{
                            // when window width is >=
                            1: {
                                slidesPerView: 1.3,
                                spaceBetween: 120,
                            },
                            400: {
                                slidesPerView: 1.3,
                                spaceBetween: 200,
                            },
                            1024: {
                                slidesPerView: 1.3,
                                spaceBetween: 175,
                            },
                            1280: {
                                slidesPerView: 1.5,
                                spaceBetween: 150,
                            },
                            1580: {
                                slidesPerView: 1.5,
                                spaceBetween: 175,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        speed={2000}
                        loop={true}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 200,
                            modifier: 3,
                            slideShadows: true,
                        }}
                        autoHeight={true}
                        resizeObserver={true}
                        modules={[EffectCoverflow, Autoplay]}>
                        {slides.map((project) => (
                            <SwiperSlide key={project.id}>
                                <Card slide={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute flex flex-col bottom-[3%] left-[50%] translate-x-[-50%]'>
                        <div className='slide-bottom'>
                            <div className='down-arrow'></div>
                            <div className='down-arrow'></div>
                            <div className='down-arrow'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects