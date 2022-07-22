import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id='footer'>
      <section>
        <form method='post' action='#'>
          <div className='fields'>
            <div className='field'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='field'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows='3'></textarea>
            </div>
          </div>
          <ul className='actions'>
            <li>
              <input type='submit' value='Send Message' />
            </li>
          </ul>
        </form>
      </section>
      <section>
        <h3>Social</h3>
        <ul className='icons alt'>
          <li>
            <Link href='https://github.com/ayanbriones'>
              <a className='icon brands alt fa-github'>
                <span className='label'>GitHub</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/ayanbriones/'>
              <a className='icon brands alt fa-linkedin'>
                <span className='label'>LinkedIn</span>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}
