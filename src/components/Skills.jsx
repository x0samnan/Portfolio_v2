import React from 'react'
import Section from './misc/Section'
import css from '../assets/css.webp'
import html from '../assets/html.webp'
import js from '../assets/js.webp'
import python from '../assets/python.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            image: html,
            title: "HTML5",
        },

        {
            id: 2,
            image: css,
            title: "CSS3",
        },
        {
            id: 3,
            image: js,
            title: "JavaScript",
        },
        {
            id: 4,
            image: python,
            title: "Python",
        },
    ];
  return <Section title="Skills" subtitle="List of tech stacks I am familiar with">
    <div className='grid gap-10 grid-cols-3 lg:grid-cols-6'>
        {
            skills.map(({id, image, title}) => (
                <div 
                key={id}
                className='flex flex-col items-center justify-center p-5 shadow-lg
                dark:shadow-cyan-200 rounded-xl duration-300 ease-in-out hover:scale-105'>
                    <img src={image} alt={title}
                    className='rounded-full w-16 object-contain' />
                    <h3 className='mt-4 text-base'>{title}</h3>
                </div>    
            ))
        }
    </div>
  </Section>
}

export default Skills
