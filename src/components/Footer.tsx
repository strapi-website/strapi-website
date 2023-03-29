import React from 'react'
import Link from 'next/link'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className=' h-20 w-full relative flex justify-center mt-72'>
      <div className=' w-full max-w-screen-2xl flex justify-center items-center gap-10'>
        <p className='text-xl'>Copyright &copy; OSLabs 2023</p>
          <Link 
          href="https://github.com/oslabs-beta/strapi" 
          className='cursor-pointer hover:text-sky-300 hover:scale-110 transition-all text-xl'
          target='_blank'
          >
            GitHub
        </Link>
      </div>
    </footer>
  )
}

export default Footer