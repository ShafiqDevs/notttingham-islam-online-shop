import React from 'react'
import Image from 'next/image'

export default function ProfileLogo({image}) {
  return (
    <div>
        <Image
            src={`${image}`} alt='logo' width={"200%"} height={"200%"} className='rounded-[100%]'
        />
    </div>
  )
}
