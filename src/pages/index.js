// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import Head from "next/head"
import Header from "../components/header"
import Banner from "@/components/Banner"
import ProductsFeed from "@/components/ProductsFeed"

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* <h1>hi everyone</h1> */}
      <Header/>
      <main className="max-w-screen-lg mx-auto">
        {/* Banner */}
        <Banner/>

      {/* Product feed */}
      <ProductsFeed products={products}/>
      </main>
    </div>
  )
}
// getServerSideProps- this tells next js that this page is no longer static, please render the page on server first then send it to the browser
export async function getServerSideProps(context){
 const products =await fetch('https://fakestoreapi.com/products').then(res=> res.json())
 return {
  props : {
    products,
  }
 }
}
