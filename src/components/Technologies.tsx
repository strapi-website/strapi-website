import React from 'react'
import Image from 'next/image'

type Props = {}

const imgClass = " w-full h-50 flex justify-center items-center";

function Technologies({}: Props) {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className={imgClass}>
        <Image src="/react.png" alt='react-logo' width={200} height={100} />
      </div>
      <div className={imgClass}>
        <Image src="/ts.png" alt='typescript-logo' width={200} height={100} />
      </div>
      <div className={imgClass}>
        <Image src="/docker.png" alt='docker-logo' width={200} height={100} />
      </div>
      <div className={imgClass}>
        <Image src="/grafana.webp" alt='grafana-logo' width={200} height={100} />
      </div>
      <div className={imgClass}>
        <Image src="/lua.png" alt='lua-logo' width={200} height={100} className="scale-75" />
      </div>
      <div className={imgClass}>
        <Image src="/prometheus.webp" alt='prometheus-logo' width={200} height={100} />
      </div>
      <div className={imgClass}>
        <Image src="/next.png" alt='next-js-logo' width={200} height={100} className="scale-90" />
      </div>
      <div className={imgClass}>
        <Image src="/twcss.png" alt='tailwind-logo' width={200} height={100} className="scale-125" />
      </div>
    </div>
  )
}

export default Technologies