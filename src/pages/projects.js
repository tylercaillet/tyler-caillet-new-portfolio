import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'
import revinyl from "../../public/images/Screen Shot 2023-01-10 at 8.32.22 PM copy.png"
import snowman from "../../public/images/Snowman copy 2.png"
import weather from "../../public/images/Screenshot 2023-05-02 at 8.51.16 PM copy.png"
import snake from "../../public/images/Screenshot 2023-05-08 at 7.34.27 PM copy 2.png"
import game from "../../public/images/Screenshot 2023-05-15 at 4.10.34 PM copy.png"


const FramerImage = motion(Image);



const FeaturedProject = ({type, title, summary, img, link ,github}) => {
    
    
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3x1 xs:p-4
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        '    />
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw" 
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
            <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
            >Visit Project</Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded=[1.5rem]
        '    />
                        <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link 
                href={link} 
                target="_blank" 
                className='hover:underline underline-offset-2'
                >
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>

            <div className='w-full mt-2 flex items-center justify-between'>
            <Link 
            href={link} 
            target="_blank"
            className='text-lg font-semibold underline md:text-base'
            >
              Visit
              </Link>
            <Link href={github} target="_blank" className='w-8 md:w-6'>
                {" "}
                 <GithubIcon /> {" "}
            </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    
    <Head>
            <title>Tyler | Projects Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Surpasses Knowledge!" 
                
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'

                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject 
                            title="ReVinyl"
                            img={revinyl}
                            summary="An app that allows authenticated users to check out vinyls, and even add their own vinyls to the collection. You can even add existing vinyls to your own wishlist."
                            link="https://revinyl-frontend.herokuapp.com/"
                            github="https://github.com/mashbash2150/ReVinyl-Frontend"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Snowman Game"
                            img={snowman}
                            summary="This is Hangman where you get assigned a catagory when you start the game, and you choose letter by letter to figure out what the word is. You have ten choices and if you dont get the word correct after ten tries then you lose."
                            link="https://snow-man-tyler.surge.sh/index.html"
                            github="https://github.com/tylercaillet/Snowman"
                            type="Project"
                            
                            
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="API Weather App"
                            img={weather}
                            summary="A simple  open weather app connecting api with axios. Type in anywhere in The US to get up to date weather information. "
                            link="https://tyler-api-weather-app.surge.sh/"
                            github="https://github.com/tylercaillet/Weather-App"
                            type="Project"
                            
                            
                            />
                        </div>

                        <div className='col-span-12'>
                        <FeaturedProject 
                            title="R & T Games"
                            img={game}
                            summary="You can look at our listing of Video Games that could possibly peak your interest.
                              Using PERN for this application, there is also user authentication to gain access to a more in-depth view of said video games.
                              If you click on Video Games, you should be able to see a listing of games that the community has put together along with a description and rating."
                            link="/"
                            github="https://github.com/tylercaillet/R_T_Games_Frontend"
                            type="Featured Project"
                            
                            
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Snake Game"
                            img={snake}
                            summary="The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult."
                            link="https://tyler-snake.surge.sh/"
                            github="https://github.com/tylercaillet/Snake"
                            type="Project"
                            
                            
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <Project 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/"
                            github="/"
                            type="Featured Project"
                            
                            
                            />
                        </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects