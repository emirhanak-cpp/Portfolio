import React from 'react'
import phoneIcon from '@/public/images/molumen_phone_icon.png'
import linkedInIcon from '@/public/images/LinkedIn_icon_circle.svg.png'
import githubIcon from '@/public/images/Octicons-mark-github.svg'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <main className="px-5 py-3 bg-primary0 min-h-screen">
      <h1 className='mt-4 text-2xl text-black text-center font-bold'>Contact Information</h1>

      <div className='mt-4 flex justify-center items-center'>
        <p className='text-black text-5xl'>@</p>
        <p className='mx-5 text-black text-2xl'>emirhanak@gmail.com</p>
      </div>
      
      <div className='mt-4 flex justify-center items-center'>
        <Image src={phoneIcon} alt='phone_number' width={40} height={40}/>
        <p className='mx-5 text-black text-2xl'>***</p>
      </div>

      <div className='mt-4 flex justify-center items-center'>
        <a href="https://www.linkedin.com/in/emirhan-ak-96a8891a2/" className='flex items-center'>
          <Image src={linkedInIcon} alt='linkedIn_logo' width={40} height={40}/>
          <p className='mx-5 text-black text-2xl'>Emirhan Ak</p>
        </a>
      </div>

      <div className='mt-4 flex justify-center items-center'>
        <a href="https://github.com/emirhanak-cpp" className='flex items-center'>
          <Image src={githubIcon} alt='gitHub_logo' width={40} height={40}/>
          <p className='mx-5 text-black text-2xl'>emirhanak-cpp</p>
        </a>
      </div>
      
    </main>
  )
}

export default ContactPage