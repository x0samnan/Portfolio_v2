import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center
    py-16 px-5 text-center'>
        <p className='max-w-xl font-semibold text-cyan-500 mb-10'>
        Made with <span className='animate-pulse text-xl'>❤️</span> by Samnan Siddique
        <br />
        Support by forking and starring<a href='https://github.com/x0samnan/Portfolio_v2'
        className='text-green-500'
        target="_blank"
        rel='noopener noreferrer'> this </a>repo
        <br /><br />
        © 2023 Samnan Siddique | All Rights Reserved
        </p>
    </section>
  )
}

export default Footer