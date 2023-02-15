import React from 'react'
import Section from './misc/Section'
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import contact from '../assets/contact.png'

const Contact = () => {
  const socials = [
        {
            id: 1,
            title: "Twitter",
            icon: <FaTwitter />,
            link: "https://twitter.com/samnantwt",
        },
        {
            id: 2,
            title: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/x0samnan",
        },
        {
            id: 3,
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            link: "https://wa.me/917501276493?text=",
           
        },
        {
            id: 4,
            title: "Email",
            icon: <FiMail />,
            link: "mailto:samnansiddique@yandex.com",   
        },
    ]
    return (
    <Section
    title="Contact" 
    subtitle="Ways you can get in touch with me. Hope to hear from you soon!">
        <div>
            <div className='flex flex-col items-center justify-center text-center gap-8'>
                <img src={contact} alt="CONTACT INFO" className='w-28 h-42 py-10' />
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                    Open to talk regarding freelancing, internships, or just to say hi!
                    Feel free to reach out to me on any of the platforms below.
                </p>
            </div>
            <div 
            className='flex w-full items-center justify-evenly text-3xl py-8'> 
                {socials.map(({icon, link}) => (
                    <a href={link} target='_blank' rel='noopener noreferrer'
                    className='duration-300 ease-in-out hover:text-rose-500'>{icon}</a>
                ))}
            </div>
            <div className='p-8 text-left w-full'>
                <form action='https://getform.io/f/23e912c5-4b3f-4a87-8f07-933dc8facfd5' method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2 capitalize font-extralight'>Name</label>
                            <input type='text' name='name' className='border-2 border-gray-300 p-2 rounded-md 
                            focus:outline-none focus:border-rose-500 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2 capitalize font-extralight'>Phone</label>
                            <input type='text' name='phone' className='border-2 border-gray-300 p-2 rounded-md 
                            focus:outline-none focus:border-rose-500 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2 capitalize font-extralight'>Email</label>
                            <input type='email' name='mail' className='border-2 border-gray-300 p-2 rounded-md 
                            focus:outline-none focus:border-rose-500 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2 capitalize font-extralight'>Message</label>
                            <textarea  name='message' rows="10" className='border-2 border-gray-300 p-2 rounded-md 
                            focus:outline-none resize-none focus:border-rose-500 dark:bg-gray-900 dark:text-white' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='my-8 bg-gradient-to-r from-rose-500 to-cyan-500 text-white
                        px-6 hover:scale-105 duration-200 py-3 font-light uppercase rounded-md tracking-wider cursor-pointer'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <h1>----------------❤️----------------</h1>
    </Section>
  )
}

export default Contact