import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manager Music Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-row items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mx-auto">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
