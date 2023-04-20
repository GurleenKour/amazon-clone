import React from 'react'
import Image from 'next/image';
// import {SearchIcon,MenuIcon,ShoppingCartIcon} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function Header() {
  return (
    <header>
        {/* top nav */}
        {/*  */}
      <div className='flex item-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            {/* use next ja image */}
            <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'/>

        </div>
        {/* search */}
        <div className='bg-yellow-400'>
          <input type="text"/>
          <MagnifyingGlassIcon className='h-12 p-4'/>
        </div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  )
}

export default Header;
