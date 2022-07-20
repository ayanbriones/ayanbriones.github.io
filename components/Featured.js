import Link from 'next/link'
import React from 'react'

export default function Featured() {
  return (
    <article className='post featured'>
      <header className='major'>
        <h2>
          <Link href='https://ecchorights.com/'>
            <a target='_blank'>Ecchorights</a>
          </Link>
        </h2>
        <p>
          Eccho Rights is one of the world’s leading distributors of television
          series and scripted formats, with an ever-growing catalogue of drama
          titles from all corners of the globe. With offices in Stockholm,
          Istanbul, Madrid and Seoul we combine true global reach with
          unrivalled local knowledge.
        </p>
      </header>
      <a href='#' className='image main'>
        {/* <img src='images/ecchorights.jpeg' alt='ecchorights' /> */}
      </a>
      <ul className='actions special'>
        <li>
          <a href='#' className='button large'>
            Check this out
          </a>
        </li>
      </ul>
    </article>
  )
}
