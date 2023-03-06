import React from 'react'
import Section from './misc/Section'
import CodeQuery from '../assets/Codequery.png'
import weather from '../assets/weather.png'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import Portfolio from '../assets/Portfolio.png'
import twitter from '../assets/twitter.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: CodeQuery,
            title: "Code Query AI (CodeGPT)",
            github: "https://github.com/x0samnan/CodeQueryAI",
            Deployment: "https://codequery-x0samnan.vercel.app/",
        },
        {
            id: 2,
            image: weather,
            title: "Weather Forecast",
            github: "https://github.com/x0samnan/WeatherAppReact",
            Deployment: "https://x0samnan-weatherforecast.vercel.app/",
        },
        {
            id: 3,
            image: Portfolio,
            title: "Portfolio Website (Source-code only | Not Live)",
            github: "https://github.com/x0samnan/Portfolio",
        },
        {
            id: 4,
            image: twitter,
            title: "Twitter Weather Bot",
            github: "https://github.com/x0samnan/TwitterWeatherBot",
            Deployment: "https://twitter.com/Just_AnotherBot",
        }
    ]
  return (

<Section 
  title="Projects" 
  subtitle="Projects based on some real-life problem solving"
  >
    <div className='grid gap-8 lg:grid-cols-2'>
        {
            projects.map(({id, image, title, github, Deployment}) => (
            <div
            key={id}
            className='max-w-lg flex shadow-lg shadow-cyan-500 rounded-2xl overflow-hidden duration-300 ease-in-out hover:scale-105 hover:shadow-rose-500'>
                <img src={image} alt={title} className='w-2/3'/>
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a className='text-3xl cursor-pointer duration-150 hover:scale-125 hover:text-green-500' href={github}
                    target='_blank'
                    rel='noopener noreferrer'><FaGithub /></a>
                    <a className='text-3xl cursor-pointer duration-150 hover:scale-125 hover:text-green-500' href={Deployment}
                    target='_blank'
                    rel='noopener noreferrer'><FaExternalLinkSquareAlt /></a>
                </div>
            </div>
        ))}
    </div>
  </Section>
  )
}
export default Projects