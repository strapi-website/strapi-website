import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type CreatorProps = {
  name: string,
  linkedin: string,
  github: string
}

function Creator({ name, linkedin, github }: CreatorProps) {
  return (
    <div 
      className='bg-gradient-to-r rounded from-darkblue via-sky-950 to-darkblue shadow-md shadow-slate-600 flex flex-col gap-4 p-4 w-1/6 min-w-250'
    >
      <h1 className='text-2xl text-center'>{name}</h1>
      <div className='flex justify-center gap-5 items-center'>
        <Link 
          href={linkedin}
          target="_blank"
        >
          <Image 
            src="/LinkedInLogo.png" 
            alt='linked-in-logo' 
            height={60} 
            width={60}
            className='rounded-lg hover:scale-105 transition-all' 
          />
        </Link>
        <Link 
          href={github}
          target="_blank"
        >
          <Image 
            src="/gh-logo.png" 
            alt='github-logo' 
            height={70} 
            width={70} 
            className='rounded-lg hover:scale-105 transition-all' 
          />
        </Link>
      </div>
    </div>
  )
}

export default Creator