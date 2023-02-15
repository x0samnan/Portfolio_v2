import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin ,FaArrowDown } from 'react-icons/fa'
import avatar from '../assets/avatar.gif'

const Hero = () => {

    const socials = [
        {
            id: 1,
            link: "https://github.com/x0samnan",
            icon: <FaGithub />,
        },
        {
            id: 2,
            link: "https://twitter.com/samnantwt",
            icon: <FaTwitter />,
        },
        {
            id: 3,
            link: "https://instagram.com/ig.samnan",
            icon: <FaInstagram />,
        },
        {
            id: 4,
            link: "https://linkedin.com/in/x0samnan",
            icon: <FaLinkedin />,
        }

    ]
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-500 uppercase font-bold'>
            Samnan Siddique
        </h2>
        <h3 className='py-3 text-lg font-bold'>
            Student | Developer | Open-Source
        </h3>
        <p className='max-w-xl font-bold text-cyan-500'>
            Hi <span className='animate-pulse text-3xl'>👋</span>, I'm Samnan! A sophomore who is an Open-Source enthusiast, likes Iced Americano, Animes, Light/Web Novels, Webtoons and Music. Love to explore and work on new tech stacks.
        </p> 
        <div className='flex justify-evenly py-8 text-3xl w-full md:w-1/3'>
            {socials.map(({ id, link, icon }) => (
                <a 
                href={link} 
                key={id}
                className='cursor-pointer duration-300 hover:text-rose-500'
                target="_blank"
                rel='noopener noreferrer'
                >
                {icon}
                </a>
            ))}
        </div> 
        <div>
            <img src={avatar} alt='avatar' className='w-60 h-60 md:w-72 md:h-72 
            object-cover object-top rounded-xl' />
            <a href='https://github.com/x0samnan/Resume/resume.pdf'>
                RESUME
            </a>
        </div>   
    </section>
  )
}

export default Hero