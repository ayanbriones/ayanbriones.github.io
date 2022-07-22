import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header id='header'>
      <Link href='/'>
        <a className='logo'>Portfolio</a>
      </Link>
    </header>
  )
}
