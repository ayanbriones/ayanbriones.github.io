import Link from 'next/link'
import React from 'react'

export default function Post() {
  return (
    <section className='posts'>
      <article>
        <header>
          <h2>
            <a href='#'>
              To-do App
              <br />
              with Reducer
            </a>
          </h2>
        </header>
        <Link href='#'>
          <a className='image fit'>
            <img src='images/pic03.jpg' alt='' />
          </a>
        </Link>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </p>
        <ul className='actions special'>
          <li>
            <a href='#' className='button'>
              Source Code
            </a>
          </li>
        </ul>
      </article>
      <article>
        <header>
          <h2>
            <a href='#'>
              Augue lorem
              <br />
              primis
            </a>
          </h2>
        </header>
        <Link href='#'>
          <a className='image fit'>
            <img src='images/pic07.jpg' alt='' />
          </a>
        </Link>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </p>
        <ul className='actions special'>
          <li>
            <Link href='#'>
              <a className='button'>Full Story</a>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  )
}
