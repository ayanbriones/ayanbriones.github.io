import React from 'react'

export default function Nav() {
  return (
    <nav id='nav'>
      <ul className='links'>
        <li className='active'>
          <a href='index.html'>Projects</a>
        </li>
        {/* <li>
          <a href='generic.html'>Generic Page</a>
        </li>
        <li>
          <a href='elements.html'>Elements Reference</a>
        </li> */}
      </ul>
      <ul className='icons'>
        <li>
          <a
            href='https://github.com/ayanbriones'
            className='icon brands fa-github'
          >
            <span className='label'>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/ayanbriones/'
            className='icon brands fa-linkedin'
          >
            <span className='label'>LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
