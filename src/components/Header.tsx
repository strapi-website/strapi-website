import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
    <header className='flex justify-between items-center pl-5 pr-5 w-full'>
      <Link href='/' className=' text-3xl flex justify-start items-center gap-5'>
        <Image 
          src="/logo.png" 
          alt="strapi logo"
          height={50}
          width={50}
        />
        <h1>
          Str<span className=' text-amber-600'>API</span>
        </h1>
      </Link>
      <Link 
        href="https://github.com/oslabs-beta/strapi" 
        className=' cursor-pointer hover:text-sky-300 hover:scale-110 transition-all'
        target='_blank'
      >
        GitHub
      </Link>
    </header>
  )
}

export default Header