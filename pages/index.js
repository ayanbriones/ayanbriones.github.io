import Head from 'next/head'
import Featured from '../components/Featured'
import Post from '../components/Post'

export default function Home() {
  return (
    <>
      <Head>
        <script
          type='text/javascript'
          src='/assets/js/jquery.min.js'
          defer
        ></script>
        <script src='/assets/js/jquery.min.js' async></script>
        <script src='/assets/js/jquery.scrollex.min.js' async></script>
        <script src='/assets/js/jquery.scrolly.min.js' async></script>
        <script src='/assets/js/browser.min.js' async></script>
        <script src='/assets/js/breakpoints.min.js' async></script>
        <script src='/assets/js/util.js' defer></script>
        <script src='/assets/js/main.js' defer></script>
      </Head>
      <Featured />
      <Post />
    </>
  )
}
