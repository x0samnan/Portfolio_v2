import React from 'react'
import Section from './misc/Section'
import jpmc from '../assets/jpmc.png'
import gs from '../assets/gs.png'

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: "Goldman Sachs Software Engineering Virtual Experience Program",
            link: "https://x0samnan-goldmansachs.vercel.app/",
            image: gs,
        },
        {
            id: 2,
            title: "JP Morgan Chase Software Engineering Virtual Experience Program",
            link: "https://x0samnan-jpmc.vercel.app/",
            image: jpmc,
        },
    ]

  return (
    <Section
    title="Certifications" 
    subtitle="Some of the certificates awarded to me! Click on the certificate to view">
        <div className='grid gap-8 lg:grid-cols-2'>
        {
            certifications.map(({id, title, image, link}) => (
            <div
            key={id}
            className='max-w-lg flex shadow-lg shadow-cyan-500 rounded-2xl overflow-hidden duration-300 ease-in-out hover:scale-105 hover:shadow-rose-500'>
                <a
                className='cursor-pointer duration-150 hover:scale-110'
                href={link}
                alt={title}
                target='_blank'
                rel='noopener noreferrer'>
                    <img src={image} alt={title} className='w-9/10'/>
                </a>
            </div>
            ))
        }
    </div>
    </Section>
  )
}

export default Certifications
