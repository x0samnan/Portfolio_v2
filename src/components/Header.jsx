import React from 'react'
import { MdWbSunny } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Header = ({darkMode, setDarkMode}) => {
  const [text] = useTypewriter ({
    words: [
      `root@samnan`, 
      `Fetching details...`,
      `An undergrad student`,
      `A developer`, 
      `An open-source enthusiast`,
      `And a cold coffee lover`,
      ],
    loop: true,
    delaySpeed: 1750,
});

  return (
    <header className='bg-white dark:bg-gray-900
     text-gray-900'>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-lg dark:text-green-500'>
          <span> (->) {text}</span>
          <Cursor cursorColor='#0FFF50' />
        </h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <MdWbSunny className='text-2xl cursor-pointer dark:text-white'/> 
            : <IoMdMoon className='text-2xl cursor-pointer'/>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header