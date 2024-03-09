import React from 'react';
import MainLogo from '@/assets/img/logo.svg';
import TogglerIcon from '@/assets/img/toggler.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-10'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='/'>
              <Image src={MainLogo} width={117} alt='main logo' />
            </Link>
          </div>
          <ul className='text-heading-4 font-medium flex items-center gap-x-14'>
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
          <div>
            <Image className='cursor-pointer' src={TogglerIcon} width={17} alt='toggler icon' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
