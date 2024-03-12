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
        <div className='container max-w-[1550px] relative'>
          <div className='grid grid-rows-1 lg:grid-cols-12 gap-8'>
            {/* Left Section */}
            <div className='md:col-span-7'>
              {/* Main Heading */}
              <div className='text-right mr-6 lg:mr-0 max-[1200px]:leading-[110px] max-[1300px]:leading-[120px] max-[768px]:text-heading-1 max-[1024px]:text-[120px] max-[1120px]:text-8xl max-[1200px]:text-[100px] max-[1300px]:text-[110px] max-[1400px]:text-[120px] max-[1500px]:text-[130px] text-hero text-theme-blue-gulf'>
                <h1 className='relative inline-block'>
                  React
                  <div className='absolute -top-4 -left-8 md:-top-8 md:-left-12'>
                    <div className='relative w-10 h-10 md:w-[85px] md:h-[82px]'>
                      <Image src={TitleTopSvg} fill alt='title top svg' />
                    </div>
                  </div>
                </h1>
                <h1 className=''>Conference</h1>
              </div>

              <div className='mt-7 grid md:grid-cols-7 max-[1120px]:gap-10 gap-14 xl:gap-16'>
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
                  <p className='text-heading-5 md:text-heading-4 opacity-80'>
                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis
                    diam turpis quam id fermentum.
                  </p>
                  <div className='max-[786px]:flex max-[786px]:justify-center'>
                    <button className='flex items-center text-heading-4 font-medium gap-2 bg-theme-yellow px-6 md:px-20 py-4 md:py-5 rounded-30 max-[768px]:mt-8 max-[1450px]:mt-16 mt-24 duration-300 hover:-translate-y-1'>
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
            <div className='md:col-span-5 flex items-end'>
              <div className='relative'>
                <Image className='rounded-30 md:rounded-[50px]' src={RightCover} height={560} alt='right cover image' />
                <div className='absolute -bottom-[45px] md:-bottom-[8px] md:-left-[50px] -right-[10px]'>
                  <div className='relative size-24 md:size-[131px] -rotate-[15deg] md:rotate-0'>
                    <Image src={RightCoverStar} fill alt='right cover svg' />
                  </div>
                </div>
                <HeroRightImgBlur />
              </div>
            </div>
          </div>

          {/* Hero Title SVG */}
          <div className='hidden md:block absolute top-0 left-[38%] -z-10'>
            <Image src={TitleBgSvg} height={832} alt='title bg svg' />
          </div>

          {/* Hero Title SVG Mobile */}
          <div className='block md:hidden absolute top-0 right-5 -z-10'>
            <Image src={TitleMobileBgSvg} height={432} alt='title mobile bg svg' />
          </div>

          {/* Scroll Down Button */}
          <a
            href='#conference-details'
            className='max-[1120px]:hidden absolute max-[1300px]:-bottom-28 max-[1450px]:-bottom-10 bottom-5 left-2/4 animate-bounce ease-in-out'
          >
            <Image src={ScrollDown} width={23} alt='Scroll down image' />
          </a>
        </div>
      </section>

      {/* Mobile Bottom Image */}
      <div className='relative lg:hidden pt-16 px-6'>
        <div className='absolute bottom-0 -right-0 -z-10 opacity-70'>
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
    <div className='absolute top-0 -left-8 md:left-0 -z-10 size-56 md:size-96 bg-[#7C3EFF] md:bg-[#d6c2ff] blur-[170px] md:blur-[200px] rounded-full'></div>
  );
};

const TopLeftCube = () => {
  return (
    <div className='absolute top-0 left-0 -z-10 opacity-30 md:opacity-70'>
      <Image src={TopLeftCubeSvg} height={428} alt='top left cube svg' />
    </div>
  );
};

const TopRightBlur = () => {
  return (
    <div className='absolute -top-10 right-0 md:top-0 md:right-0 -z-10 size-36 md:size-[412px] bg-[#BE229C] md:bg-[#ebb9e0] blur-[130px] md:blur-[200px] rounded-full'></div>
  );
};

const HeroLeftImgBlur = () => {
  return (
    <div className='size-[175px] md:size-60 bg-[#b2e5e8] md:bg[#2286BE]/[.35] absolute -left-3 md:left-16 rounded-full bottom-10 md:-bottom-1/4 blur-[70px] -z-10 md:blur-[250px]'></div>
  );
};

const HeroRightImgBlur = () => {
  return (
    <div className='size-[175px] md:size-64 bg-theme-yellow absolute right-0 rounded-full bottom-full md:-bottom-[20%] blur-[150px] -z-20 md:blur-[300px]'></div>
  );
};
