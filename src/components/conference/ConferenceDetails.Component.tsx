import React, { Key } from 'react';
import Image from 'next/image';
import TwitterSvg from '@/assets/img/socials/Vector.svg';
import LinkedinSvg from '@/assets/img/socials/Social icon.svg';
import DribbleSvg from '@/assets/img/socials/Social icon-1.svg';
import GithubSvg from '@/assets/img/socials/Social icon-2.svg';
import dayjs from 'dayjs';

export const OrganizerComponent = ({ data }: { data: any }) => {
  return (
    <div className='space-y-6'>
      {data?.length !== 0 ? (
        data?.map((organizer: any, i: 'Key | null | undefined') => (
          <div key={i} className='bg-white rounded-lg p-4 pr-10'>
            <SingleCard heading={organizer?.name} description={organizer?.about} image={organizer?.image?.url} />
          </div>
        ))
      ) : (
        <div className='bg-white rounded-lg p-10 text-heading-3 font-bold'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const SpeakersComponent = ({ data }: { data: any }) => {
  return (
    <div className='space-y-6'>
      {data?.length !== 0 ? (
        data?.map((speaker: any, i: 'Key | null | undefined') => (
          <div key={i} className='bg-white rounded-lg p-4 pr-10'>
            <SingleCard
              heading={speaker?.name}
              description={speaker?.about}
              image={speaker?.image?.url}
              socials={speaker?.social}
            />
          </div>
        ))
      ) : (
        <div className='bg-white rounded-lg p-10 text-heading-3 font-bold'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const ScheduleComponent = ({ data }: { data: any }) => {
  return (
    <div className='space-y-6'>
      {data?.length !== 0 ? (
        data?.map((schedule: any, i: Key) => (
          <div key={i} className='bg-white rounded-lg px-10 py-6'>
            <div className='mb-5 flex items-center justify-between'>
              <h4 className='text-heading-3 font-bold'>{dayjs(schedule?.day).format('MMMM DD, YYYY')}</h4>
              <p className='text-theme-blue-gulf text-heading-5 line-clamp-2'>{dayjs(schedule?.day).format('dddd')}</p>
            </div>
            <div className='space-y-4'>
              {schedule?.intervals?.map((interval: any, j: Key) => (
                <div key={j} className='text-heading-5 text-[#0A142F]'>
                  <h1>
                    Duration : {interval?.begin} - {interval?.end}
                  </h1>
                  <ul className='list-disc pl-10'>
                    {interval?.sessions?.map((session: any, k: Key) => (
                      <li key={k}>{session?.title}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className='bg-white rounded-lg p-10 text-heading-3 font-bold'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const SponsorsComponent = ({ data }: { data: any }) => {
  return (
    <div className='space-y-6'>
      {data?.length !== 0 ? (
        data?.map((sponsor: any, i: Key) => (
          <div key={i} className='bg-white rounded-lg p-4 pr-10'>
            <SingleCard heading={sponsor?.name} description={sponsor?.about} image={sponsor?.image?.url} />
          </div>
        ))
      ) : (
        <div className='bg-white rounded-lg p-10 text-heading-3 font-bold'>Sorry, no data found!</div>
      )}
    </div>
  );
};

interface SingleCardType {
  heading: string;
  description: string;
  image: string;
  socials?: {
    dribble: string | null;
    github: string | null;
    linkedin: string | null;
    twitter: string | null;
  };
}

const SingleCard = ({ heading, description, image, socials }: SingleCardType) => {
  return (
    <div className='flex items-center gap-10'>
      <div className='relative size-36 shrink-0'>
        <Image src={image} alt='organizer image' fill className='object-cover object-center rounded-lg' />
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center mb-5'>
          <h4 className='text-heading-3 font-bold'>{heading}</h4>
          {socials && (
            <div className='flex items-center gap-4'>
              {socials?.twitter && (
                <a href={socials?.twitter} target='_blank' rel='noopener noreferrer'>
                  <Image src={TwitterSvg} width={20} alt='social icon' />
                </a>
              )}
              {socials?.linkedin && (
                <a href={socials?.linkedin} target='_blank' rel='noopener noreferrer'>
                  <Image src={LinkedinSvg} width={20} alt='social icon' />
                </a>
              )}
              {socials?.dribble && (
                <a href={socials?.dribble} target='_blank' rel='noopener noreferrer'>
                  <Image src={DribbleSvg} width={20} alt='social icon' />
                </a>
              )}
              {socials?.github && (
                <a href={socials?.github} target='_blank' rel='noopener noreferrer'>
                  <Image src={GithubSvg} width={20} alt='social icon' />
                </a>
              )}
            </div>
          )}
        </div>
        <p className='text-theme-blue-gulf text-heading-5 line-clamp-2'>{description}</p>
      </div>
    </div>
  );
};
