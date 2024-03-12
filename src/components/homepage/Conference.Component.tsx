import React from 'react';
import { getClient } from '@/lib/graphql/customApolloClient';
import { getAllConferences } from '@/lib/graphql/queries';
import { MainConferenceDataType } from '@/utils/interfaces';
import dayjs from 'dayjs';
import Link from 'next/link';
import BulletIcon from '@/assets/img/bullet-icon.svg';
import Image from 'next/image';
import { cn } from '@/lib/cn/cn';

const Conference = async () => {
  const { data, loading, error } = await getClient().query({ query: getAllConferences });

  // console.log('data', data);
  // console.log('loading', loading);
  // console.log('error', error);

  return (
    <section id='conference-details' className='mb-10 mt-28 pt-5 md:mb-24 md:mt-60'>
      <div className='container max-w-[1088px]'>
        <h1 className='section-heading mb-8 text-center md:mb-10'>Conference</h1>

        <div className='relative'>
          <div className='border-2-2 absolute left-6 top-10 -z-10 h-[95%] border border-theme-storm-gray border-opacity-20 md:left-1/2'></div>

          {data?.conferences?.map((conference: MainConferenceDataType, i: number) => (
            <div key={conference?.id} className='mb-9 flex items-start justify-between md:mb-16'>
              {/* Conference Date */}
              <div className={`hidden w-5/12 pt-4 md:block ${i % 2 === 0 ? 'order-3' : ''}`}>
                <p className={`text-heading-6 text-theme-storm-gray ${i % 2 === 0 ? '' : 'text-end'}`}>
                  {dayjs(conference?.startDate).format('DD MMMM YYYY')}
                </p>
              </div>

              {/* Middle Icon */}
              <div className='order-1 mt-6 rounded-full bg-white py-2 md:order-2 md:-my-2'>
                <div
                  className={cn(
                    'rounded-full border p-3',
                    i === 0 ? 'border-theme-yellow bg-[#fff9eb]' : 'border-theme-sliver bg-theme-bianca'
                  )}
                >
                  <SvgItem active={i === 0 ? true : false} />
                </div>
              </div>

              {/* Conference Card */}
              <div className={`group ml-5 w-full md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'order-1' : 'order-3'}`}>
                <p className={`mb-[14px] text-heading-6 text-theme-storm-gray md:hidden`}>
                  {dayjs(conference?.startDate).format('DD MMMM YYYY')}
                </p>
                <Link
                  href={`/conference/${conference?.id}`}
                  className='block rounded-lg border-t-4 border-theme-sliver p-[18px] shadow-c-card-shadow duration-500 ease-in-out hover:-translate-y-1 group-hover:border-theme-yellow group-hover:shadow-lg md:px-4 md:py-7'
                >
                  <div className='flex items-start gap-4'>
                    <div className='relative mt-1 h-4 w-4 flex-shrink-0 md:mt-[2px]'>
                      <Image src={BulletIcon} alt='bullet icon' fill className='object-cover object-center' />
                    </div>
                    <div>
                      <h4 className='mb-2 text-heading-4 text-theme-blue-gulf md:line-clamp-1'>{conference?.name}</h4>
                      <p className='text-heading-6 text-theme-storm-gray md:line-clamp-1'>{conference?.slogan}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conference;

const SvgItem = ({ active }: { active: boolean }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
      <g clipPath='url(#clip0_4320_4953)'>
        <path
          d='M19.9024 10.2969L9.93801 23.7969C9.89151 23.8599 9.83088 23.9111 9.761 23.9463C9.69112 23.9816 9.61394 24 9.53566 24C9.46975 24.0002 9.40448 23.9871 9.34376 23.9615C9.24043 23.9187 9.15448 23.8424 9.09967 23.7449C9.04486 23.6474 9.02438 23.5344 9.04151 23.4239L10.417 14.5H4.50001C4.40748 14.5 4.31678 14.4743 4.23797 14.4259C4.15917 14.3774 4.09537 14.308 4.05367 14.2254C4.01197 14.1428 3.994 14.0502 4.00176 13.958C4.00953 13.8658 4.04273 13.7776 4.09766 13.7032L14.062 0.203163C14.1284 0.113192 14.223 0.0480689 14.3308 0.0182004C14.4385 -0.0116681 14.5532 -0.00455846 14.6564 0.0383933C14.7596 0.081345 14.8455 0.15766 14.9003 0.255144C14.955 0.352627 14.9755 0.465654 14.9585 0.576163L13.583 9.50001H19.5C19.5925 9.50001 19.6833 9.52567 19.7621 9.57416C19.8409 9.62265 19.9047 9.69206 19.9464 9.77466C19.9881 9.85726 20.0061 9.94981 19.9983 10.042C19.9905 10.1342 19.9573 10.2225 19.9024 10.2969Z'
          fill='#cdcdcd'
          className={active ? 'fill-theme-yellow' : 'fill-theme-sliver'}
        />
      </g>
      <defs>
        <clipPath id='clip0_4320_4953'>
          <rect width={24} height={24} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
