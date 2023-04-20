// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import Head from "next/head"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* <h1>hi everyone</h1> */}
      <Header/>
    </div>
  )
}
