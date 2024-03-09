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
    <section className='bg-theme-bianca py-24'>
      <div className='container'>
        <h1 className='text-center text-heading-1 mb-8'>Our Sponsor</h1>
        <div className='space-y-8'>
          <div>
            <h1 className='text-heading-5 mb-4 text-center text-[#667085]'>🥇 Gold Sponsor</h1>
            <div className='flex items-center justify-center gap-14'>
              <Image width={217} src={GoldOne} alt='gold sponsor one' />
              <Image width={217} src={GoldTwo} alt='gold sponsor two' />
            </div>
          </div>
          <div>
            <h1 className='text-heading-5 mb-4 text-center text-[#667085]'>🥈Silver Sponsors</h1>
            <div className='flex items-center justify-center gap-14'>
              <Image width={217} src={SilverOne} alt='silver sponsor one' />
              <Image width={217} src={SilverTwo} alt='silver sponsor two' />
              <Image width={217} src={SilverThree} alt='silver sponsor two' />
            </div>
          </div>
          <div>
            <h1 className='text-heading-5 mb-4 text-center text-[#667085]'>🥉Bronze Sponsors</h1>
            <div className='flex items-center justify-center gap-14'>
              <Image width={217} src={BronzeOne} alt='bronze sponsor one' />
              <Image width={217} src={BronzeTwo} alt='bronze sponsor two' />
              <Image width={217} src={BronzeThree} alt='bronze sponsor two' />
              <Image width={217} src={BronzeFour} alt='bronze sponsor two' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
