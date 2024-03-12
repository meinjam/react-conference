import React from 'react';
import Image from 'next/image';
import TwitterSvg from '@/assets/img/socials/Vector.svg';
import LinkedinSvg from '@/assets/img/socials/Social icon.svg';
import DribbleSvg from '@/assets/img/socials/Social icon-1.svg';
import GithubSvg from '@/assets/img/socials/Social icon-2.svg';
import dayjs from 'dayjs';
import {
  IntervalType,
  OrganizeType,
  ScheduleType,
  SessionType,
  SingleCardType,
  SpeakerType,
  SponsorType,
} from '@/utils/interfaces';

export const OrganizerComponent = ({ data }: { data: OrganizeType[] }) => {
  return (
    <div className='details-card-parent'>
      {data?.length !== 0 ? (
        data?.map((organizer: OrganizeType, i: number) => (
          <div key={i} className='details-card-child'>
            <SingleCard heading={organizer?.name} description={organizer?.about} image={organizer?.image?.url} />
          </div>
        ))
      ) : (
        <div className='details-not-found'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const SpeakersComponent = ({ data }: { data: SpeakerType[] }) => {
  return (
    <div className='details-card-parent'>
      {data?.length !== 0 ? (
        data?.map((speaker: SpeakerType, i: number) => (
          <div key={i} className='details-card-child'>
            <SingleCard
              heading={speaker?.name}
              description={speaker?.about}
              image={speaker?.image?.url}
              socials={speaker?.social}
            />
          </div>
        ))
      ) : (
        <div className='details-not-found'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const ScheduleComponent = ({ data }: { data: ScheduleType[] }) => {
  return (
    <div className='details-card-parent'>
      {data?.length !== 0 ? (
        data?.map((schedule: ScheduleType, i: number) => (
          <div key={i} className='bg-white rounded-lg px-5 md:px-8 xl:px-10 py-[14px] md:py-5 xl:py-6'>
            <div className='mb-5 flex items-center justify-between'>
              <h4 className='text-heading-5 md:text-heading-3 font-bold'>
                {dayjs(schedule?.day).format('MMMM DD, YYYY')}
              </h4>
              <p className='text-theme-blue-gulf text-heading-7 md:text-heading-5 line-clamp-2'>
                {dayjs(schedule?.day).format('dddd')}
              </p>
            </div>
            <div className='space-y-4'>
              {schedule?.intervals?.map((interval: IntervalType, j: number) => (
                <div key={j} className='text-heading-6 md:text-heading-5 text-[#0A142F]'>
                  <h1>
                    Duration : {interval?.begin} - {interval?.end}
                  </h1>
                  <ul className='list-disc pl-8 xl:pl-10'>
                    {interval?.sessions?.map((session: SessionType, k: number) => (
                      <li key={k}>{session?.title}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className='details-not-found'>Sorry, no data found!</div>
      )}
    </div>
  );
};

export const SponsorsComponent = ({ data }: { data: SponsorType[] }) => {
  return (
    <div className='details-card-parent'>
      {data?.length !== 0 ? (
        data?.map((sponsor: SponsorType, i: number) => (
          <div key={i} className='details-card-child'>
            <SingleCard heading={sponsor?.name} description={sponsor?.about} image={sponsor?.image?.url} />
          </div>
        ))
      ) : (
        <div className='details-not-found'>Sorry, no data found!</div>
      )}
    </div>
  );
};

const SingleCard = ({ heading, description, image, socials }: SingleCardType) => {
  return (
    <div className='flex md:items-center gap-4 md:gap-5 lg:gap-8 xl:gap-10'>
      <div className='relative size-[88px] md:size-24 lg:size-32 xl:size-36 shrink-0'>
        <Image src={image} alt='organizer image' fill className='object-contain object-center rounded-lg' />
      </div>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-between gap-2 md:items-center mb-2 lg:mb-5 flex-wrap'>
          <h4 className='text-heading-5 md:text-heading-3 font-bold'>{heading}</h4>
          {socials && (
            <div className='flex items-center gap-4'>
              {socials?.twitter && (
                <a
                  href={socials?.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='single-card-social-img-div'
                >
                  <Image src={TwitterSvg} fill alt='social icon' />
                </a>
              )}
              {socials?.linkedin && (
                <a
                  href={socials?.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='single-card-social-img-div'
                >
                  <Image src={LinkedinSvg} fill alt='social icon' />
                </a>
              )}
              {socials?.dribble && (
                <a
                  href={socials?.dribble}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='single-card-social-img-div'
                >
                  <Image src={DribbleSvg} fill alt='social icon' />
                </a>
              )}
              {socials?.github && (
                <a
                  href={socials?.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='single-card-social-img-div'
                >
                  <Image src={GithubSvg} fill alt='social icon' />
                </a>
              )}
            </div>
          )}
        </div>
        <p className='text-theme-blue-gulf text-heading-7 md:text-heading-5 leading-4 md:leading-5 line-clamp-5 md:line-clamp-2'>
          {description}
        </p>
      </div>
    </div>
  );
};
