import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/common/Accordion.Component';
import { ConferenceTagType, SingleConferenceDataType } from '@/utils/interfaces';
import { cn } from '@/lib/cn/cn';
import Image from 'next/image';
import UpDownIcon from '@/assets/img/up-down.svg';
import {
  OrganizerComponent,
  ScheduleComponent,
  SpeakersComponent,
  SponsorsComponent,
} from '@/components/conference/ConferenceDetails.Component';
import { ReactSortable } from 'react-sortablejs';

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: 'ghost',
  group: 'shared',
  forceFallback: true,
  handle: '.dragBtn',
  dragClass: 'dragging',
};

interface ComponentTypes {
  activeItem: ConferenceTagType;
  setActiveItem: React.Dispatch<React.SetStateAction<ConferenceTagType>>;
  conferenceTags: ConferenceTagType[];
  setConferenceTags: React.Dispatch<React.SetStateAction<ConferenceTagType[]>>;
  data: SingleConferenceDataType;
}

const ConferenceRowMobile = ({
  activeItem,
  setActiveItem,
  conferenceTags,
  setConferenceTags,
  data,
}: ComponentTypes) => {
  const [activeId, setActiveId] = useState<string>('1');

  return (
    <Accordion type='single' collapsible defaultValue={'1'} onValueChange={(e: string) => setActiveId(e)}>
      <ReactSortable list={conferenceTags} setList={setConferenceTags} {...sortableOptions}>
        {conferenceTags?.map((tag: ConferenceTagType) => (
          <AccordionItem value={(tag?.id).toString()} key={tag?.id}>
            {/* Expand Collapse Button */}
            <AccordionTrigger className=''>
              <div
                className={cn(
                  'sidebar-child duration-500',
                  activeId === (tag?.id).toString() ? 'border-theme-yellow bg-theme-yellow shadow-lg' : ''
                  // 'bg-theme-yellow border-theme-yellow shadow-lg'
                )}
              >
                <div className='rounded-lg bg-white p-2 md:p-3 xl:px-4 xl:py-[17px]'>
                  <div className='dragBtn relative h-5 w-[22px] xl:h-[22px] xl:w-[25px]'>
                    <Image src={UpDownIcon} fill alt='sort icon' />
                  </div>
                </div>
                <span
                  className={cn(
                    'font-bold duration-500',
                    activeId === (tag?.id).toString() ? 'text-white' : 'text-black'
                  )}
                >
                  {tag?.name}
                </span>
              </div>
            </AccordionTrigger>

            {/* Collapsible Content */}
            <AccordionContent>
              {tag?.name === 'Organizer' && (
                <OrganizerComponent key='OrganizerComponent324fdsd' data={data?.conference?.organizers} />
              )}
              {tag?.name === 'Speakers' && (
                <SpeakersComponent key='SpeakersComponent43fds' data={data?.conference?.speakers} />
              )}
              {tag?.name === 'Schedule' && (
                <ScheduleComponent key='ScheduleComponent898dsfdsf' data={data?.conference?.schedules} />
              )}
              {tag?.name === 'Sponsors' && (
                <SponsorsComponent key='SponsorsComponent321fdsf' data={data?.conference?.sponsors} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </ReactSortable>
    </Accordion>
  );
};

export default ConferenceRowMobile;
