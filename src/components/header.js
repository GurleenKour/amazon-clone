import React from "react";
import Image from "next/image";
// import {SearchIcon,MenuIcon,ShoppingCartIcon} from '@heroicons/react/24/outline';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import {signIn, signOut,useSession} from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)
  return (
    <header>
      {/* top nav */}
      {/*  bg-amazon_blue- custom themem added in tailwind config */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-2">
          {/* use next ja image */}
          <Image
           onClick={()=>router.push('/')}
            src="https://links.papareact.com/f90"
            width={130}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 px-4 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={session?signOut : signIn} className="link">
            {console.log('session',session)}
             <p>{ session ? 'Hello ,' + session?.user?.name:'Sign In'}</p>
            <p className='font-extrabold md:text-sm'>Account and lists</p> 
          </div>
          <div className="link">
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>and orders</p>
          </div>
          <div  onClick={()=> router.push('/checkout')} className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black text-center font-bold">{items.length}</span>
            <ShoppingCartIcon className=' h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2 '>basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white 
      text-sm">
        {/* <Menu */}
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1"/>
          All</p>
          <p className="link">Prome Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's deals</p>
          <p className="hidden link lg:inline-flex">Electronics</p>
          <p className="hidden link lg:inline-flex">Food & Delivery</p>
          <p className="hidden link lg:inline-flex">Prime</p>
          <p className="hidden link lg:inline-flex">Buy again</p>
          <p className="hidden link lg:inline-flex">Shopper toolkit</p>
          <p className="hidden link lg:inline-flex">Helath & personal care</p>
      </div>
    </header>
  );
}

export default Header;
