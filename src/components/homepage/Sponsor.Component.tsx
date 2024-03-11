import React from 'react';
import Image from 'next/image';
import GoldOne from '@/assets/img/sponsors/gold-1.svg';
import GoldTwo from '@/assets/img/sponsors/gold-2.svg';
import SilverOne from '@/assets/img/sponsors/silver-1.svg';
import SilverTwo from '@/assets/img/sponsors/silver-2.svg';
import SilverThree from '@/assets/img/sponsors/silver-3.svg';
import BronzeOne from '@/assets/img/sponsors/bronze-1.svg';
import BronzeTwo from '@/assets/img/sponsors/bronze-2.svg';
import BronzeThree from '@/assets/img/sponsors/bronze-3.svg';
import BronzeFour from '@/assets/img/sponsors/bronze-4.svg';

const Sponsor = () => {
  return (
    <section className='bg-theme-bianca py-14 md:py-24'>
      <div className='container'>
        <h1 className='text-center text-heading-2 font-bold md:text-heading-1 mb-6 md:mb-8'>Our Sponsor</h1>
        <div className='space-y-8'>
          <div>
            <h1 className='text-heading-7 md:text-heading-5 mb-4 text-center text-[#667085]'>🥇 Gold Sponsor</h1>
            <div className='flex items-center justify-center gap-14'>
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={GoldOne?.src}
                alt='gold sponsor one'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={GoldTwo?.src}
                alt='gold sponsor two'
              />
            </div>
          </div>
          <div>
            <h1 className='text-heading-7 md:text-heading-5 mb-4 text-center text-[#667085]'>🥈Silver Sponsors</h1>
            <div className='flex items-center justify-center gap-14 flex-wrap gap-y-4'>
              <img
                className='flex-b h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={SilverOne?.src}
                alt='silver sponsor one'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={SilverTwo?.src}
                alt='silver sponsor two'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={SilverThree?.src}
                alt='silver sponsor two'
              />
            </div>
          </div>
          <div>
            <h1 className='text-heading-7 md:text-heading-5 mb-4 text-center text-[#667085]'>🥉Bronze Sponsors</h1>
            <div className='flex items-center justify-center gap-14 flex-wrap gap-y-4'>
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={BronzeOne?.src}
                alt='bronze sponsor one'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={BronzeTwo?.src}
                alt='bronze sponsor two'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={BronzeThree?.src}
                alt='bronze sponsor two'
              />
              <img
                className='h-8 md:h-12 lg:h-16 object-contain aspect-[12/3] md:aspect-[8/3] lg:aspect-[9/3] xl:aspect-[11/3]'
                src={BronzeFour?.src}
                alt='bronze sponsor two'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
