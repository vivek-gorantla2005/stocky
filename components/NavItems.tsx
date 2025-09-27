import React from 'react'
import NAV_ITEMS from '@/lib/constants'
import Link from 'next/link'

const NavItems = () => {
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
        {NAV_ITEMS.map((item)=>(
            <li key={item.href}>
                <Link href={item.href} className=''>{item.title}</Link> 
            </li>
        ))}
    </ul>
  )
}

export default NavItems