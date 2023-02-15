import React from 'react'
import { MdWbSunny } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'

const header = ({darkMode, setDarkMode}) => {
  return (
    <header className='bg-white dark:bg-gray-900
     text-gray-900'>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-4xl dark:text-green-500'>
          SAMNAN
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

export default header