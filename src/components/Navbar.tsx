'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import NavItem from './NavItem';
import { User } from '@prisma/client';

interface NavbarProps {
    currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
    const [menu, setMenu] = useState(false)
    console.log('currentUser', currentUser);
    const handleMenu = () => {
        setMenu(!menu);
    }
  return (
    <nav className='realative z-10 w-full bg-orange-500 text-white'>
        <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
            <div className='flex items-center text-2xl h-14'>
                <Link href="/">중고마켓</Link>
            </div>
            <div className='text-2xl sm:hidden'>
                {menu === false ? 
                <button onClick={handleMenu}>+</button> : 
                <button onClick={handleMenu}>-</button>}
            </div>
            <div className='hidden sm:block'>
                <NavItem currentUser={currentUser} />
            </div>
        </div>
        <div className='block sm:hidden'>
            {(menu === false) ? null : <NavItem mobile currentUser={currentUser} />}
        </div>
    </nav>
  )
}

export default Navbar