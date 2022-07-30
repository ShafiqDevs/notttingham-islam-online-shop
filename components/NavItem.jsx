import React from 'react'
import Link from 'next/link';

export default function NavItem({_text,_link,_className}) {
  return (
    <div className={_className ||`hover:text-orange-500`}><Link href={_link}><a>{_text}</a></Link></div>
  )
}
