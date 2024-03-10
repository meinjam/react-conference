'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import UpDownIcon from '@/assets/img/up-down.svg';
import { cn } from '@/lib/cn/cn';
import {
  OrganizerComponent,
  ScheduleComponent,
  SpeakersComponent,
  SponsorsComponent,
} from './ConferenceDetails.Component';

const conferenceTags: string[] = ['Organizer', 'Speakers', 'Schedule', 'Sponsors'];

const ConferenceRow = ({ data }: { data: any }) => {
  const [activeItem, setActiveItem] = useState<string>(conferenceTags[0]);

  // console.log(data);

  return (
    <div className='grid grid-cols-12'>
      {/* Main Lists */}
      <div className='col-span-4 max-w-[90%]'>
        <ul className='space-y-8'>
          {conferenceTags?.map((tag: string, i) => (
            <li
              onClick={() => setActiveItem(tag)}
              key={i}
              className={cn(
                'cursor-pointer rounded-lg border border-[#d9d9d980] flex items-center gap-11 p-2 duration-500',
                activeItem === tag ? 'bg-theme-yellow border-theme-yellow shadow-lg' : 'bg-while'
              )}
            >
              <div className='bg-white px-4 py-[17px] rounded-lg'>
                <Image src={UpDownIcon} height={22} alt='sort icon' />
              </div>
              <span className={cn('font-bold text-xl duration-500', activeItem === tag ? 'text-white' : 'text-black')}>
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CUrrent List Items */}
      <div className='col-span-8 p-[52px] bg-theme-bianca rounded-xl'>
        {activeItem === 'Organizer' && <OrganizerComponent data={data?.conference?.organizers} />}
        {activeItem === 'Speakers' && <SpeakersComponent data={data?.conference?.speakers} />}
        {activeItem === 'Schedule' && <ScheduleComponent data={data?.conference?.schedules} />}
        {activeItem === 'Sponsors' && <SponsorsComponent data={data?.conference?.sponsors} />}
      </div>
    </div>
  );
};

export default ConferenceRow;
