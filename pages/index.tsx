import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '../components/button'
import '../components/button/Button.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Worldd!</h1>
        <Button kind="primary">Fede</Button>
        <Button kind="secondary">Fede</Button>
      </main>
    </div>
  )
}

export default Home
