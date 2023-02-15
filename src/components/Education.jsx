import React from 'react'
import Section from './misc/Section'
import highschool from '../assets/highschool.png'
import university from '../assets/university.png'

const Education = () => {
    const education = [
     {
        id: 1,
        title: "High School Degree",
        image: highschool,
        name: "Kendriya Vidyalaya",
        address: "Kathmandu, Nepal",
        year: "2019-2021",
     },
     {
        id: 2,
        title: "Bachelor's Degree",
        image: university,
        name: "Presidency University",
        address: "Bangalore, India",
        year: "2021-2025(expected)",
     },   
    ]
  return (
    <Section 
  title="Education" 
  subtitle="My formal education"
  > 
        <div className="grid gap-8 lg:grid-cols-2">
            {education.map(({id, title, image, name, year, address}) => (
                <div
                key={id}
                className='flex p-4 justify-center items-center rounded-xl shadow-md
                shadow-cyan-500 duration-300 ease-in-out hover:scale-105'>
                    <div>
                        <img src={image} alt={title} 
                        className='W-2/3'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>
                            {name}<br />
                            {address}
                        </h3>
                        
                        <h4>
                            {title}
                        </h4>
                        <p>
                            {year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
  )
}

export default Education