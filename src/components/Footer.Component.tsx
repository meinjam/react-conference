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
    <footer className='bg-theme-blue-gulf py-10 text-center text-white md:py-16'>
      <div className='container'>
        <Link href='/' className='flex justify-center'>
          <div className='relative h-8 w-[116px] md:h-12 md:w-[175px]'>
            <Image src={FooterLogo} fill className='mx-auto' alt='main logo' />
          </div>
        </Link>
        <ul className='mb-6 mt-12 flex items-center justify-center gap-7 md:mb-6 md:mt-16'>
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
