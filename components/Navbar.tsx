import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='bg-primary3 px-5 py-3 shadow-sm'>
        <nav className='flex justify-between items-center'>
          <div>
            <Link href='/'>
                <span className='text-black text-xl mr-6'>About Me</span>
            </Link>

            <Link href='/work-experience'>
                <span className='text-black text-xl'>Work Experience</span>
            </Link>
          </div>

            <Link href='/contact'>
              <span className='text-black text-xl'>Contact</span>
            </Link>
        </nav>
    </header>
    </>
  )
}

export default Navbar