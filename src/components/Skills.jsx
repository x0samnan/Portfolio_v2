import React from 'react'
import Section from './misc/Section'
import css from '../assets/css.webp'
import html from '../assets/html.webp'
import js from '../assets/js.webp'
import python from '../assets/python.png'
import react from '../assets/react.png'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongo.svg'
import firebase from '../assets/firebase.png'
import sanity from '../assets/sanity.png'
import typescript from '../assets/typescript.svg'
import julia from '../assets/julia.jpg'
import docker from '../assets/docker.webp'
import git from '../assets/git.png'
import openai from '../assets/openai.png'
import java from '../assets/java.png'
import redux from   '../assets/redux.png'
import sql from '../assets/sql.png'

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
        {
            id: 5,
            image: react,
            title: "ReactJs",
        },
        {
            id: 6,
            image: express,
            title: "ExpressJs",
        },
        {
            id: 7,
            image: node,
            title: "NodeJs",
        },
        {
            id: 8,
            image: mongodb,
            title: "MongoDB",
        },
        {
            id: 9,
            image: firebase,
            title: "Firebase",
        },
        {
            id: 10,
            image: sanity,
            title: "Sanity",
        },
        {
            id: 11,
            image: typescript,
            title: "TypeScript",
        },
        {
            id: 12,
            image: julia,
            title: "JuliaLang",
        },
        {
            id: 13,
            image: docker,
            title: "Docker",
        },
        {
            id: 14,
            image: git,
            title: "Git",
        },
        {
            id: 15,
            image: openai,
            title: "OpenAI",
        },
        {
            id: 16,
            image: java,
            title: "Java",
        },
        {
            id: 17,
            image: redux,
            title: "Redux",
        },
        {
            id: 18,
            image: sql,
            title: "SQL",
        }

    ];
  return <Section title="Skills" subtitle="List of TECH STACKS I am familiar with">
    <div className='grid gap-10 grid-cols-3 lg:grid-cols-6'>
        {
            skills.map(({id, image, title}) => (
                <div 
                key={id}
                className='flex flex-col items-center justify-center p-5 shadow-lg
                shadow-cyan-200 rounded-xl duration-300 ease-in-out hover:scale-105'>
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
