import React from 'react';
import Image, { StaticImageData } from 'next/image';
import GoldOne from '@/assets/img/sponsors/gold-1.svg';
import GoldTwo from '@/assets/img/sponsors/gold-2.svg';
import SilverOne from '@/assets/img/sponsors/silver-1.svg';
import SilverTwo from '@/assets/img/sponsors/silver-2.svg';
import SilverThree from '@/assets/img/sponsors/silver-3.svg';
import BronzeOne from '@/assets/img/sponsors/bronze-1.svg';
import BronzeTwo from '@/assets/img/sponsors/bronze-2.svg';
import BronzeThree from '@/assets/img/sponsors/bronze-3.svg';
import BronzeFour from '@/assets/img/sponsors/bronze-4.svg';

interface ContentTypes {
  title: string;
  images: StaticImageData[];
}

const contents: ContentTypes[] = [
  {
    title: '🥇 Gold Sponsor',
    images: [GoldOne, GoldTwo],
  },
  {
    title: '🥈Silver Sponsors',
    images: [SilverOne, SilverTwo, SilverThree],
  },
  {
    title: '🥉Bronze Sponsors',
    images: [BronzeOne, BronzeTwo, BronzeThree, BronzeFour],
  },
];

const Sponsor = () => {
  return (
    <section className='bg-theme-bianca py-14 md:py-24'>
      <div className='container'>
        <h1 className='section-heading mb-6 text-center md:mb-8'>Our Sponsor</h1>
        <div className='space-y-8'>
          {contents?.map((content: ContentTypes, i: number) => (
            <div key={i}>
              <h1 className='sponsor-title'>{content?.title}</h1>
              <div className='sponsor-img-div'>
                {content?.images?.map((singleImg: StaticImageData, j: number) => (
                  <img className='flex-b sponsor-img' src={singleImg?.src} alt={`${content?.title} ${j + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
