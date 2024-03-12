import React from 'react';
import MainLogo from '@/assets/img/logo.svg';
import TogglerIcon from '@/assets/img/toggler.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-8 lg:py-10'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='relative h-4 w-[58px] md:h-8 md:w-[117px]'>
            <Image src={MainLogo} fill alt='main logo' />
          </Link>
          <ul className='hidden items-center gap-x-14 text-heading-4 font-medium lg:flex '>
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
          <div className='relative size-5'>
            <Image className='cursor-pointer' src={TogglerIcon} fill alt='toggler icon' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
