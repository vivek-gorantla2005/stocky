import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import UserDropDown from './UserDropDown'

const Header = () => {
  return (
    <div>
      <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt='Stocky Logo ' width={140} height={32} className='h-8 w-auto cursor-pointer'/>
            </Link>
            <nav className='hidden sm:block'>
                <NavItems/>
            </nav>
            <UserDropDown/>
        </div>
      </header>
    </div>
  )
}

export default Header
