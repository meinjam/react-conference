import React from 'react';
import MainLogo from '@/assets/img/logo.svg';
import TogglerIcon from '@/assets/img/toggler.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-8 lg:py-10'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='relative w-[58px] md:w-[117px] h-4 md:h-8'>
            <Image src={MainLogo} fill alt='main logo' />
          </Link>
          <ul className='text-heading-4 font-medium lg:flex items-center gap-x-14 hidden '>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>What We Do</a>
            </li>
            <li>
              <a href='#'>Our Work</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Say Hi</a>
            </li>
          </ul>
          <div className='size-5 relative'>
            <Image className='cursor-pointer' src={TogglerIcon} fill alt='toggler icon' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
