import React from 'react';
import Image from 'next/image';
import TitleTopSvg from '@/assets/img/hero-title-top.svg';
import TitleBgSvg from '@/assets/img/hero-title-bg.svg';
import TopLeftBlurSvg from '@/assets/img/hero-left.svg';
import TopLeftCubeSvg from '@/assets/img/hero-left-cube.svg';
import TopRightBlurSvg from '@/assets/img/hero-right.svg';
import LeftCover from '@/assets/img/hero-left-man.png';
import LeftCoverOrnament from '@/assets/img/hero-ornament.svg';
import RightCover from '@/assets/img/hero-right-man.png';
import RightCoverStar from '@/assets/img/hero-star.svg';
import ButtonSvg from '@/assets/img/bi_arrow-up-right.svg';
import ScrollDown from '@/assets/img/scroll-down.svg';

const Showcase = () => {
  return (
    <>
      <section className='pt-24'>
        <div className='container max-w-[1550px] relative'>
          <div className='grid grid-cols-12 gap-8'>
            {/* Left Section */}
            <div className='col-span-7'>
              {/* Main Heading */}
              <div className='text-right'>
                <h1 className='text-hero text-theme-blue-gulf relative inline-block'>
                  React
                  <div className='absolute -top-8 -left-12'>
                    <Image src={TitleTopSvg} width={85} alt='title top svg' />
                  </div>
                </h1>
                <h1 className='text-hero text-theme-blue-gulf'>Conference</h1>
              </div>
              <div className='mt-7 grid grid-cols-7 gap-16'>
                {/* Left COver Image */}
                <div className='relative col-span-3'>
                  <Image className='rounded-30' src={LeftCover} height={420} alt='left cover image' />

                  <div className='absolute -bottom-20 -right-12 -z-10'>
                    <Image src={LeftCoverOrnament} width={195} alt='left cover svg' />
                  </div>
                </div>

                {/* Paragraph and Button */}
                <div className='col-span-4 pt-2'>
                  <p className='text-heading-4 opacity-80'>
                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis
                    diam turpis quam id fermentum.
                  </p>
                  <button className='flex items-center text-heading-4 font-medium gap-2 bg-theme-yellow px-20 py-5 rounded-30 mt-24 duration-300 hover:-translate-y-1'>
                    <span> Buy Ticket</span>
                    <div>
                      <Image className='' src={ButtonSvg} height={20} width={20} alt='button arrow' />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='col-span-5 flex items-end'>
              <div className='relative'>
                <Image className='rounded-[50px]' src={RightCover} height={560} alt='right cover image' />
                <div className='absolute -bottom-[80px] -left-[50px]'>
                  <Image src={RightCoverStar} width={132} alt='right cover svg' />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Title SVG */}
          <div className='absolute top-0 left-[38%] -z-10'>
            <Image src={TitleBgSvg} height={832} alt='title bg svg' />
          </div>

          {/* Scroll Down Button */}
          <a href='#conference-details' className='absolute bottom-5 left-2/4 animate-bounce ease-in-out'>
            <Image src={ScrollDown} width={23} alt='Scroll down image' />
          </a>
        </div>
      </section>

      {/* Top Left Blur */}
      <TopLeftBlur />

      {/* Top Left Cube */}
      <TopLeftCube />

      {/* Top Right blur */}
      <TopRightBlur />
    </>
  );
};

export default Showcase;

const TopLeftBlur = () => {
  return (
    <div className='absolute top-0 left-0 -z-10 opacity-50'>
      <Image src={TopLeftBlurSvg} height={583} width={583} alt='top left blur svg' />
    </div>
  );
};

const TopLeftCube = () => {
  return (
    <div className='absolute top-0 left-0 -z-10 opacity-70'>
      <Image src={TopLeftCubeSvg} height={428} alt='top left cube svg' />
    </div>
  );
};

const TopRightBlur = () => {
  return (
    <div className='absolute top-0 right-0 -z-10 opacity-50'>
      <Image src={TopRightBlurSvg} height={612} width={612} alt='top right blur svg' />
    </div>
  );
};
