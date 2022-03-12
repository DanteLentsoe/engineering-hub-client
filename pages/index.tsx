import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Engineering Hub | Home</title>
        <meta
          name="description"
          content="Engineering Hub is a web platform intented to help engineers collaborate and share ideas and information about Software "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
