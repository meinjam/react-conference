import React from 'react';
import Image from 'next/image';
import TitleTopSvg from '@/assets/img/hero-title-top.svg';
import TitleBgSvg from '@/assets/img/hero-title-bg.svg';
import TitleMobileBgSvg from '@/assets/img/hero-title-bg-mbl.svg';
import TopLeftCubeSvg from '@/assets/img/hero-left-cube.svg';
import LeftCover from '@/assets/img/hero-left-man.png';
import LeftCoverOrnament from '@/assets/img/hero-ornament.svg';
import LeftCoverOrnamentMobile from '@/assets/img/hero-ornament-mobile.png';
import RightCover from '@/assets/img/hero-right-man.png';
import RightCoverStar from '@/assets/img/hero-star.svg';
import ButtonSvg from '@/assets/img/bi_arrow-up-right.svg';
import ScrollDown from '@/assets/img/scroll-down.svg';

const Showcase = () => {
  return (
    <>
      <section className='pt-8 md:pt-24'>
        <div className='container relative max-w-[1550px]'>
          <div className='grid grid-rows-1 gap-8 lg:grid-cols-12'>
            {/* Left Section */}
            <div className='md:col-span-7'>
              {/* Main Heading */}
              <div className='mr-6 text-right text-hero text-theme-blue-gulf max-[1500px]:text-[130px] max-[1400px]:text-[120px] max-[1300px]:text-[110px] max-[1300px]:leading-[120px] max-[1200px]:text-[100px] max-[1200px]:leading-[110px] max-[1120px]:text-8xl max-[1024px]:text-[120px] max-[768px]:text-heading-1 lg:mr-0'>
                <h1 className='relative inline-block'>
                  React
                  <div className='absolute -left-8 -top-4 md:-left-12 md:-top-8'>
                    <div className='relative h-10 w-10 md:h-[82px] md:w-[85px]'>
                      <Image src={TitleTopSvg} fill alt='title top svg' />
                    </div>
                  </div>
                </h1>
                <h1 className=''>Conference</h1>
              </div>

              <div className='mt-7 grid gap-14 max-[1120px]:gap-10 md:grid-cols-7 xl:gap-16'>
                {/* Left COver Image */}
                <div className='relative col-span-3 hidden lg:block'>
                  <Image className='rounded-30' src={LeftCover} height={420} alt='left cover image' />

                  <div className='absolute -bottom-20 -right-12 -z-10'>
                    <Image src={LeftCoverOrnament} width={195} alt='left cover svg' />
                  </div>

                  <HeroLeftImgBlur />
                </div>

                {/* Paragraph and Button */}
                <div className='col-span-4 pt-2'>
                  <p className='text-heading-5 opacity-80 md:text-heading-4'>
                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis
                    diam turpis quam id fermentum.
                  </p>
                  <div className='max-[786px]:flex max-[786px]:justify-center'>
                    <button className='mt-24 flex items-center gap-2 rounded-30 bg-theme-yellow px-6 py-4 text-heading-4 font-medium duration-300 hover:-translate-y-1 max-[1450px]:mt-16 max-[768px]:mt-8 md:px-20 md:py-5'>
                      <span> Buy Ticket</span>
                      <div>
                        <Image className='' src={ButtonSvg} height={20} width={20} alt='button arrow' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='flex items-end md:col-span-5'>
              <div className='relative'>
                <Image className='rounded-30 md:rounded-[50px]' src={RightCover} height={560} alt='right cover image' />
                <div className='absolute -bottom-[45px] -right-[10px] md:-bottom-[8px] md:-left-[50px]'>
                  <div className='relative size-24 -rotate-[15deg] md:size-[131px] md:rotate-0'>
                    <Image src={RightCoverStar} fill alt='right cover svg' />
                  </div>
                </div>
                <HeroRightImgBlur />
              </div>
            </div>
          </div>

          {/* Hero Title SVG */}
          <div className='absolute left-[38%] top-0 -z-10 hidden md:block'>
            <Image src={TitleBgSvg} height={832} alt='title bg svg' />
          </div>

          {/* Hero Title SVG Mobile */}
          <div className='absolute right-5 top-0 -z-10 block md:hidden'>
            <Image src={TitleMobileBgSvg} height={432} alt='title mobile bg svg' />
          </div>

          {/* Scroll Down Button */}
          <a
            href='#conference-details'
            className='absolute bottom-5 left-2/4 animate-bounce ease-in-out max-[1450px]:-bottom-10 max-[1300px]:-bottom-28 max-[1120px]:hidden'
          >
            <Image src={ScrollDown} width={23} alt='Scroll down image' />
          </a>
        </div>
      </section>

      {/* Mobile Bottom Image */}
      <div className='relative px-6 pt-16 lg:hidden'>
        <div className='absolute -right-0 bottom-0 -z-10 opacity-70'>
          <Image src={LeftCoverOrnamentMobile} height={100} alt='left cover svg' />
        </div>
        <HeroLeftImgBlur />
        <div className='relative h-52 w-40 object-cover object-center'>
          <Image className='rounded-[20px]' src={LeftCover} fill alt='left cover image' />
        </div>
      </div>

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
    <div className='absolute -left-8 top-0 -z-10 size-56 rounded-full bg-[#7C3EFF] blur-[170px] md:left-0 md:size-96 md:bg-[#d6c2ff] md:blur-[200px]'></div>
  );
};

const TopLeftCube = () => {
  return (
    <div className='absolute left-0 top-0 -z-10 opacity-30 md:opacity-70'>
      <Image src={TopLeftCubeSvg} height={428} alt='top left cube svg' />
    </div>
  );
};

const TopRightBlur = () => {
  return (
    <div className='absolute -top-10 right-0 -z-10 size-36 rounded-full bg-[#BE229C] blur-[130px] md:right-0 md:top-0 md:size-[412px] md:bg-[#ebb9e0] md:blur-[200px]'></div>
  );
};

const HeroLeftImgBlur = () => {
  return (
    <div className='md:bg[#2286BE]/[.35] absolute -left-3 bottom-10 -z-10 size-[175px] rounded-full bg-[#b2e5e8] blur-[70px] md:-bottom-1/4 md:left-16 md:size-60 md:blur-[250px]'></div>
  );
};

const HeroRightImgBlur = () => {
  return (
    <div className='absolute bottom-full right-0 -z-20 size-[175px] rounded-full bg-theme-yellow blur-[150px] md:-bottom-[20%] md:size-64 md:blur-[300px]'></div>
  );
};
