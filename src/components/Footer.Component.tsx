import React from 'react';
import Image from 'next/image';
import FooterLogo from '@/assets/img/logo-footer.svg';
import TwitterLogo from '@/assets/img/twitter.svg';
import LinkedinLogo from '@/assets/img/linkedin.svg';
import DribbleLogo from '@/assets/img/dribble.svg';
import FacebookLogo from '@/assets/img/facebook.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-theme-blue-gulf text-white py-10 md:py-16 text-center'>
      <div className='container'>
        <Link href='/' className='flex justify-center'>
          <div className='relative w-[116px] md:w-[175px] h-8 md:h-12'>
            <Image src={FooterLogo} fill className='mx-auto' alt='main logo' />
          </div>
        </Link>
        <ul className='flex items-center justify-center gap-7 mt-12 md:mt-16 mb-6 md:mb-6'>
          <li>
            <a href='#'>
              <Image src={TwitterLogo} width={24} alt='twitter logo' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={LinkedinLogo} width={24} alt='twitter logo' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={DribbleLogo} width={24} alt='twitter logo' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={FacebookLogo} width={24} alt='twitter logo' />
            </a>
          </li>
        </ul>
        <p className='text-heading-5 leading-6'>© {new Date().getFullYear()} Lemonhive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
